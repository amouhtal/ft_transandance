import { UserDto } from "src/dto-classes/user.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    InsertUser(UserDto: UserDto): Promise<void>;
    findAll(): Promise<any[]>;
}
