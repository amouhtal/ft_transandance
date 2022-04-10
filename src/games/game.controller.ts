import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { GamesDto } from "src/dto-classes/game.dto";
import { Games } from "src/entities/game.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { GamesService } from "./game.service";
import { Request } from 'express';


@Controller('games')
export class gamesController
{
    constructor(private readonly gamesService: GamesService,
        @InjectRepository(Games)
        private gameService: Repository<Games>) {

    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    finGames(@Req() request: Request)
    {
        console.log("cookies : ", request.cookies);
        return this.gamesService.findAll() ;
    }

    @Post()
    getGames(
        @Body() gamesData: GamesDto
    )
    {
        console.log(gamesData);
        this.gamesService.InsertGame(gamesData);
    }
}