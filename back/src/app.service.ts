import { Injectable, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }
}
