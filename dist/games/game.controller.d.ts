import { GamesDto } from "src/dto-classes/game.dto";
import { Games } from "src/entities/game.entity";
import { Repository } from "typeorm";
import { GamesService } from "./game.service";
export declare class gamesController {
    private readonly gamesService;
    private gameService;
    constructor(gamesService: GamesService, gameService: Repository<Games>);
    finGames(): Promise<Games[]>;
    getGames(gamesData: GamesDto): void;
}