import { VerifyCallback } from 'passport-42';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
declare const AuthService_base: new (...args: any[]) => any;
export declare class AuthService extends AuthService_base {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
    googleLogin(req: any): Promise<"No user from google" | {
        message: string;
        user: any;
        token: string;
    }>;
}
export {};
