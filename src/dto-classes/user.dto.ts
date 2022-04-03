import { IsAlpha, IsEmail, IsNotEmpty, isNotEmpty, isString, Length, Max, Min } from "class-validator";
import { User } from "src/entities/user.entity";

export class UserDto extends User{

    @IsAlpha()
    firstName: string;

    @IsAlpha()  
    lastName: string;
    
    @IsNotEmpty()
    @Length(4, 10)
    userName: string;

    @IsEmail()
    email: string;
  
    isActive: boolean;
  }