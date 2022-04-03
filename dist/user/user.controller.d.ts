import { UserDto } from "src/dto-classes/user.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    private usersRepository;
    constructor(userService: UserService, usersRepository: Repository<User>);
    findAllUsers(): Promise<any[]>;
    userUser(userData: UserDto): void;
}
