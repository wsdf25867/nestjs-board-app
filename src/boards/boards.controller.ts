import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService){}

    @Get('/')
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() CreateBoardDto: CreateBoardDto): Board {   
        return this.boardsService.createBoard(CreateBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus): Board {
            return this.boardsService.updateBoardStatus(id, status);
    }
    
}
    
