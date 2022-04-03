import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

@Controller('auth/42')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('42'))
  async googleAuth(@Req() req) {}

  @Get('callback')
  @UseGuards(AuthGuard('42'))
  googleAuthRedirect(@Req() req) {
    console.log(this.appService.googleLogin(req));
    return this.appService.googleLogin(req)
  }
}