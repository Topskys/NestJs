import {Controller, Post, Body, UseInterceptors, UploadedFile, Get, Res} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import {FileInterceptor,FilesInterceptor} from "@nestjs/platform-express";
import {join} from 'path';
import type { Response } from 'express';
import {zip} from 'compressing';


@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file')) // 处理文件中间件
  upload(@UploadedFile() file) {
    console.log("uploadFile：",file)
    return {
      msg:"上传成功",
      data:file,
    }
  }

  @Get("export")
  download(@Res() res:Response) {
    const url=join(__dirname,"../images/1669534870170.jpg");
    res.download(url);
  }


  @Get('stream')
  async down (@Res() res:Response) {
    const url = join(__dirname,'../images/1669551904256.jpg')
    const tarStream  = new zip.Stream()
    await tarStream.addEntry(url)

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader(
        'Content-Disposition',
        `attachment; filename=xiaoman`,
    );
    tarStream.pipe(res); // 管道
  }

}
