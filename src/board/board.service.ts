import { HttpException, Injectable } from '@nestjs/common';
import { CreateBoardDto, UpdateBoardDto } from './dto/board.dto';
import { CardDto } from './dto/card.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { pick } from 'lodash-es';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async createBoard(createBoardDto: CreateBoardDto) {
    await this.prisma.board.create({
      data: {
        ...createBoardDto,
      },
    });
    return null;
  }

  async deleteBoard(id: number) {
    const bindCardIds = await this.prisma.card.findMany({
      where: { boardId: id },
      select: { id: true },
    });
    const deleteCards = this.prisma.card.deleteMany({
      where: { id: { in: bindCardIds.map((c) => c.id) } },
    });
    const deletesBoard = this.prisma.board.delete({
      where: { id },
    });
    await this.prisma.$transaction([deleteCards, deletesBoard]);
    return null;
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

    const dtoInstance = plainToInstance(CardDto, cards);
    const errors = await validate(dtoInstance);
    console.log(errors);

    // 排除cards非dto字段，todo：未找到自动过滤的办法
    const _cards = cards?.map(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      (c) => pick(c, Object.keys(new CardDto())) as CardDto,
    );
    if (!id) throw new HttpException('id不能为空', 400);
    return this.prisma.$transaction(async (tx) => {
      // 1. 更新board
      await tx.board.update({
        where: { id },
        data: boardData,
      });
      // 2. 如果有cards数据，处理cards
      if (_cards?.length) {
        await this.handleCardUpdate(tx, id, _cards);
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
