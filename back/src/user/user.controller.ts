import { Body, Controller, Get, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "src/dto-classes/user.dto";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";
import { Request } from 'express';

export class ExampleDto {
    Uimage: string;
    userName: string;
  }

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService,
        @InjectRepository(User)
        private usersRepository: Repository<User>)
    {
    }

    @Get('users')
    // @UseGuards(AuthGuard('jwt'))
    findAllUsers() {
        return this.userService.findAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    userUser(
        @Body() userData:  UserDto
    )
    {
        // console.log(userData);
        this.userService.InsertUser(userData);
    }

    @Post('pop')
    chekUsername(@Body() request: ExampleDto )
    {
        this.userService.findUser(request);
    }
}