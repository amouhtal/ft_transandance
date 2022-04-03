import { Body, Controller, Get, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GamesDto } from "src/dto-classes/game.dto";
import { Games } from "src/entities/game.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { GamesService } from "./game.service";




@Controller('games')
export class gamesController
{
    constructor(private readonly gamesService: GamesService,
        @InjectRepository(Games)
        private gameService: Repository<Games>) {

    }

    @Get()
    finGames()
    {
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