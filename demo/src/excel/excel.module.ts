import { Module } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { ExcelController } from './excel.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Excel} from "./entities/excel.entity";
import {MulterModule} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {extname, join} from "path";

@Module({
  imports:[TypeOrmModule.forFeature([Excel]),
    MulterModule.register({
      // 存储配置
      storage:diskStorage({
        destination:join(__dirname, '../excel/temp'),
        filename:(_,file,callback)=>{
          const fileName=`${new Date().getTime()+extname(file.originalname)}`;
          return callback(null,fileName);
        }
      }),
    })
  ], // 创建数据库相关
  controllers: [ExcelController],
  providers: [ExcelService]
})
export class ExcelModule {}
