import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService2 {
  getHello(): number {
    return 12345678;
  }
}



