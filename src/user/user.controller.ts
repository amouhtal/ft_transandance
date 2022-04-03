import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "src/dto-classes/user.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";


@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService,
        @InjectRepository(User)
        private usersRepository: Repository<User>)
    {
    }

    @Get() 
    findAllUsers() {
        return this.userService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    userUser(
        @Body() userData:  UserDto
    )
    {
        console.log(userData);
        this.userService.InsertUser(userData);
    }

}