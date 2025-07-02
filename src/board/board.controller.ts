import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto, UpdateBoardDto } from './dto/board.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('board')
@ApiTags('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createBoard(createBoardDto);
  }

  @Delete(':id')
  deleteBoard(@Param('id') id: number) {
    return this.boardService.deleteBoard(id);
  }

  @Put()
  updateBoard(@Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.updateBoard(updateBoardDto);
  }

  @Get()
  getBoards() {
    return this.boardService.getBoards();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: '' })
  getBoardById(@Param('id') id: number) {
    return this.boardService.getBoardById(id);
  }
}
