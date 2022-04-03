import { User } from "src/entities/user.entity";
export declare class UserDto extends User {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    isActive: boolean;
}
