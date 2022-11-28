/*
 * @Author: Topskys
 * @Date: 2022-11-26 15:29:15
 * @LastEditTime: 2022-11-26 15:38:58
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import {Request,Response,NextFunction} from "express";
import * as cors from "cors";
import {NestExpressApplication} from "@nestjs/platform-express";
import {join } from 'path';
import {ResponseInterceptor} from './common/response';
import {HttpFilter} from './common/exception';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
// import {RoleGuard} from './gurd/role/role.guard'


// fetch("http://localhost:3000/user/1").then(res=>res.json()).then(res=>{console.log(res)});
// 全局中间件，只能是函数式写法，不能是类写法
const whiteList = ["/user/1"];
function MiddlewareAll(req:Request, res:Response,next:NextFunction) {
  // 在此作鉴权、跨域等
  console.log(req.originalUrl,"全局中间件")
  next();
  // if(whiteList.indexOf(req.originalUrl)!==-1){ // includes(req.originalUrl)
  //   next();
  // }else{
  //   res.send({ // 使用json，否则有些响应前端无法解析
  //     msg:"不是白名单"
  //   })
  // }
}


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // use 区
  // 跨域配置
  app.enableCors(); // app.use(cors());
  // 全局中间件
  app.use(MiddlewareAll);
  // session
  app.use(session({
    secret: "XiaoMan",
    name: "xm.session",
    rolling: true,
    cookie: {
      httpOnly: true,
      maxAge: 99999||null,
    }
  }));
  // 配置静态文件访问
  app.useStaticAssets(join(__dirname, "images"),{
    prefix:"/xiaoman" // 虚拟前缀 http://localhost:3000/xiaoman/1669534870170.jpg
  });
  // 相应拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());
  // 异常拦截器
  app.useGlobalFilters(new HttpFilter());
  // 全局数据验证，比局部验证更具体、详细
  app.useGlobalPipes(new ValidationPipe());
  // 全局守卫
  // app.useGlobalGuards(new RoleGuard());
  // 接口文档
  const options = new DocumentBuilder().addBearerAuth().setTitle('Topsky api-docs').setDescription('Description').setVersion('1').build()
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('/api/docs',app,document);


  // 监听端口
  await app.listen(3000);
}
bootstrap();
