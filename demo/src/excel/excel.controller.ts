import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
  Req,
  Request, Res,
  Response,
} from '@nestjs/common';
import { ExcelService } from './excel.service';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import {FileInterceptor} from "@nestjs/platform-express";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import path = require("path");
import multiparty=require('multiparty')// >npm multiparty fs-extra -S
import fse=require('fs-extra');
import fs =require('fs')



@Controller('excel')
export class ExcelController {
  constructor(private readonly excelService: ExcelService) {}

  // 接收上传excel文件
  // @Post()
  // @UseInterceptors(FileInterceptor('file')) // 处理文件中间件
  // upload(@UploadedFile() file) {
  //   console.log("uploadFile：",file)
  //   return {
  //     msg:"上传成功",
  //     data:file,
  //   }
  // }

  // @Post() 多条
  // create(@Body() body) {
  //   return this.excelService.create(body);
  // }

  // @Post() // 单条
  // create(@Body() createExcelDto:CreateExcelDto) {
  //   return this.excelService.create(createExcelDto);
  // }


  @Post() // 大文件
  create(@Req() req:Request) {
    const UPLOAD_DIR=path.resolve(__dirname,'src/excel/videoUpload')
    const form=new multiparty.Form({uploadDir:'src/excel/temp'});
    form.parse(req);
    form.on('file', async (name,chunk) => {
      //  存放切片目录
      let chunkDir=`${UPLOAD_DIR}/${chunk.originalFilename.split('.')[0]}`
      if(!fse.existsSync(chunkDir)){
        await fse.mkdirs(chunkDir);
      }
      //  原文件名.index.txt
      let dPath=path.join(chunkDir,chunk.originalFilename.split('.')[1])
      await fse.move(chunk.path,dPath,{overwrite:true})
    })
  }


  @Post('/merge')
  merge(@Body() body){
    let name=body.name;
    let fname=name.split('.')[0];

    const UPLOAD_DIR=path.resolve(__dirname,'videoUpload')
    let chunkDir=path.join(UPLOAD_DIR,fname);
    const m=async ()=>{
      let chunks=await fse.readdir(chunkDir);
      chunks.sort((a,b)=>a-b).map(chunkPath=>{
        fs.appendFileSync(
            path.join(UPLOAD_DIR,name),
            fs.readFileSync(`${chunkDir}/${chunkPath}`)
        )
      });
      fse.removeSync(chunkDir);
      return {
        url:`http://localhost:3000/videoUpload/${name}`
      }
    }
    m();
  }


  @Get()
  findAll(@Query() query:{keywords: string,page:number,pageSize:number}) {
    return this.excelService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExcelDto: UpdateExcelDto) {
    return this.excelService.update(+id, updateExcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excelService.remove(+id);
  }
}
