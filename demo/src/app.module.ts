import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService} from './app.service';
import { AppService2 } from './app.service2';
import { UserModule} from './user/user.module';
import {ConfigDynamicModule, ConfigModule} from "./config/config.module";
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';
import { SpiderModule } from './spider/spider.module';
import { GurdModule } from './gurd/gurd.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CurdModule } from './curd/curd.module';
import { ExcelModule } from './excel/excel.module';


@Module({
  imports: [    TypeOrmModule.forRoot({
    type: "mysql", //数据库类型
    username: "root", //账号
    password: "123456", //密码
    host: "localhost", //host
    port: 3306, //
    database: "test", //库名
    // entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件,已自动加载实体
    synchronize:true, //synchronize字段代表是否自动将实体类同步到数据库
    retryDelay:500, //重试连接数据库间隔
    retryAttempts:10,//重试连接数据库的次数
    autoLoadEntities:true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
  }),UserModule,ConfigModule,ConfigDynamicModule.forRoot({
    path:"/configDynamic"
  }), UploadModule, LoginModule, SpiderModule, GurdModule, CurdModule, ExcelModule], // 关联模块
  controllers: [AppController],
  // providers: [AppService],
  providers:[
    AppService2,
    {
      provide:"AS",
      useClass: AppService,
    },
    {
      provide:"BB",
      useValue: ['TB','PDD','JD','WPH'],
    },
    {
      provide:"CC",
      inject:[AppService2],
      async  useFactory(AppService2:AppService2){
        // console.log(AppService2.getHello());return 123456;
        return await new Promise((r)=>{
          setTimeout(()=>{
            r(AppService2.getHello())
          },2000)
        })
      }
    }
  ]
})
export class AppModule {}
