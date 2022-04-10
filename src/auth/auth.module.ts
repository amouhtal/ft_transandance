import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthStrategy } from "./auth.strategy";
import { jwtConstants } from "./constants";


@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '24h',},}),
        //   PassportModule
    ],
    
    providers: [AuthService, AuthStrategy],
    controllers: [AuthController]
})

export class AuthModule {}
