import { Controller, Get, HttpStatus, Post, Redirect, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { AuthService } from "./auth.service";


@Controller('auth/42')
export class AuthController {
  constructor(private readonly authService: AuthService)
  {
    
  }

  @Get()
  @UseGuards(AuthGuard('42'))
  async googleAuth(@Req() req) {}

  @Redirect()
  @Get('callback')
  @UseGuards(AuthGuard('42'))
  async asyncgoogleAuthRedirect(@Req() req, @Res({ passthrough: true }) response: Response) {
    //  console.log(this.authService.googleLogin(req));
    
    const userInfo:any = await this.authService.googleLogin(req);
    const token = userInfo.token;
    // console.log(userInfo.token);
    
  //  response.cookie('access_token2', token);
      response.cookie('access_token', token, {
      httpOnly: true,
      domain: 'localhost', // your domain here!
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    })
    return {userInfo, statusCode: HttpStatus.TEMPORARY_REDIRECT, url: 'http://localhost:3000/'};
  }

  // @Post('hello')
  // // @UseGuards(AuthGuard('jwt'))
  // devices(): string {
  //   return 'Hello World';
  // }
}
