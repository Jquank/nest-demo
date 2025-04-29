import { HttpException, Injectable } from '@nestjs/common';
import { CreateBoardDto, UpdateBoardDto } from './dto/board.dto';
import { CardDto } from './dto/card.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async createBoard(createBoardDto: CreateBoardDto) {
    return await this.prisma.board.create({
      data: {
        ...createBoardDto,
      },
    });
  }

  async deleteBoard(id: number) {
    return await this.prisma.board.delete({
      where: { id },
    });
  }

  /** 处理Card表的更新 */
  async handleCardUpdate(
    tx: Prisma.TransactionClient,
    boardId: number,
    cards: CardDto[],
  ) {
    const existingCards = await this.prisma.card.findMany({
      where: { boardId },
      select: { id: true },
    });
    // board下所有卡片id
    let cardIds = existingCards.map((card) => card.id);
    const updates = cards
      .filter((c) => c.id)
      .map((card) => {
        // 除去有id的，剩下的则为需要删除的
        cardIds = cardIds.filter((id) => id !== card.id);
        // 更新语句
        return {
          where: { id: card.id },
          data: { ...card, boardId },
        };
      });

    // 批量处理更新
    for (let i = 0; i < updates.length; i += 20) {
      const batch = updates.slice(i, i + 20);
      await Promise.all(batch.map((u) => tx.card.update(u)));
    }
    const creates = cards
      .filter((c) => !c.id)
      .map((card) => ({
        ...card,
        boardId,
      }));
    // 批量处理创建
    if (creates.length > 0) {
      await tx.card.createMany({ data: creates });
    }
    // 删除多余卡片（如果有）
    if (cardIds.length) {
      await tx.card.deleteMany({
        where: { id: { in: cardIds }, boardId },
      });
    }
  }

  async updateBoard(updateBoardDto: UpdateBoardDto) {
    const { id, cards, ...boardData } = updateBoardDto;
    if (!id) throw new HttpException('id不能为空', 400);
    return this.prisma.$transaction(async (tx) => {
      // 1. 更新board
      await tx.board.update({
        where: { id },
        data: boardData,
      });
      // 2. 如果有cards数据，处理cards
      if (cards?.length) {
        await this.handleCardUpdate(tx, id, cards);
      }
      return null;
    });
  }

  async getBoards() {
    return await this.prisma.board.findMany({});
  }

  async getBoardById(id: number) {
    return await this.prisma.board.findUnique({
      where: { id },
      include: { cards: true },
    });
  }
}
