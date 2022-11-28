import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {UserService} from './user.service';
import {UserController} from './user.controller';
import {Logger} from 'src/middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService],// 共享模块
})

export class UserModule implements NestModule{
  configure(consumer:MiddlewareConsumer){
    // consumer.apply(Logger).forRoutes("user")
    // consumer.apply(Logger).forRoutes({path:"user",method:RequestMethod.POST})
    consumer.apply(Logger).forRoutes(UserController) // 拦截userController所有请求
  }
}
