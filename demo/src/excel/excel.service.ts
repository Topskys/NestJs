import { Injectable } from '@nestjs/common';
import { CreateExcelDto } from './dto/create-excel.dto';
import { UpdateExcelDto } from './dto/update-excel.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Like, Repository} from "typeorm";
import {Excel} from "./entities/excel.entity";

@Injectable()
export class ExcelService {

  constructor(@InjectRepository(Excel) private readonly excel:Repository<Excel>) {}

  //  新增
  // create(body) {
  //   const obj=new Excel();
  //   return body.forEach((v)=>{
  //     obj.name=v.name;
  //     obj.phone=v.phone;
  //     this.excel.save(obj);
  //   })
  // }

  // 新增--单条
  create(createExcelDto: CreateExcelDto) {
    const obj=new Excel();
    obj.name=createExcelDto.name;
    obj.phone=createExcelDto.phone;
    return this.excel.save(obj);
  }

  // 获取列表（可查询）
  async findAll(query:{keywords:string, page: number, pageSize: number}) {
    // find()：Promise 故需要 async await
    const data=await this.excel.find({
      where:{
        name:Like(`%${query.keywords}%`)
      },
      order: {
        id: "DESC"
      },
      skip: (query.page - 1)* query.pageSize,// 0 10 20 30 40
      take:query.pageSize,
    })
    const total = await this.excel.count({
      where: {
        name: Like(`%${query.keywords}%`)
      },
    })
    return {
      data,
      total
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} excel`;
  }

  update(id: number, updateExcelDto: UpdateExcelDto) {
    return `This action updates a #${id} excel`;
  }

  remove(id: number) {
    return `This action removes a #${id} excel`;
  }
}
