import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }
    console.log(req);
    return {
      message: 'User information from Intra',
      user: req.user
    }
  }
}
