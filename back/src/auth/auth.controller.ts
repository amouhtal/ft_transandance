import { Controller, Get, HttpStatus, Ip, Redirect, Req, Res, UseGuards, Header, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response } from "express";
import { AuthService } from "./auth.service";
import RefreshTokenDto from "./dto/refresh-token.dto";
import { RefreshToken } from "./entities/refresh-token.entity";
const cookie = require('fastify-cookie')
let tes: any;

@Controller('auth/42')
export class AuthController {
  constructor(private readonly authService: AuthService)
  {
    
  }

  
  @Get()
  @UseGuards(AuthGuard('42'))
  async googleAuth(@Req() req) {
    return tes
  }

  // @Redirect()
  @Get('callback')
  // @Redirect('http://localhost:3000/', 302)
  @UseGuards(AuthGuard('42'))
  async asyncgoogleAuthRedirect(@Req() req, @Res() response: Response, @Ip() ip) {
    //  console.log(req.user);
     try
     {

       let info =  await this.authService.Login(req, response, {ipAddress: ip});
      let tr : boolean =  await this.authService.cheskUser(req);
      //  console.log(info)
       response.cookie('token', info);
       if(tr)
        return response.redirect('http://127.0.0.1:3000');
      return response.redirect('http://127.0.0.1:3000/games');
      
      }
     catch (e)
     {
      //  console.log(e);
     }
    // if (this.authService.cheskUserName(req))
    //   return response.redirect('http://127.0.0.1:3001');
    // else

    // req.user.email
  }


  
  @Get('refresh')
  async refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken);
  }

}
