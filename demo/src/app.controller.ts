import {Controller, Get, Inject} from '@nestjs/common';
import { AppService } from './app.service';
import {UserService} from "./user/user.service";

@Controller()
export class AppController {
  constructor(
      @Inject("AS") private readonly appService: AppService,
      @Inject("BB") private shopList: string[],
      @Inject("CC") private readonly cc: number,
      private readonly userService: UserService,
      ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()+this.shopList;
  }

  @Get('hello')
  getHello2(): number {
    return this.cc;
  }

  @Get('hello3')
  getHello3(): string {
    return this.userService.findAll(); // 使用共享模块的Service
  }
}
