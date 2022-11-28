import { Injectable } from '@nestjs/common';
import { CreateCurdDto } from './dto/create-curd.dto';
import { UpdateCurdDto } from './dto/update-curd.dto';
import {Like, Repository} from "typeorm";
import {Curd} from "./entities/curd.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CurdService {

  constructor(@InjectRepository(Curd) private readonly curd:Repository<Curd>) {}

  //  新增
  create(createCurdDto: CreateCurdDto) {
    const obj=new Curd();
    obj.name=createCurdDto.name;
    obj.desc=createCurdDto.desc;
    return this.curd.save(obj);
  }

  // 获取列表（可查询）
  async findAll(query:{keyWord:string, page: number, pageSize: number}) {
      // find()：Promise 故需要 async await
   const data=await this.curd.find({
       where:{
           name:Like(`%${query.keyWord}%`)
       },
       order: {
           id: "DESC"
       },
      skip: (query.page - 1)* query.pageSize,// 0 10 20 30 40
      take:query.pageSize,
    })
    const total = await this.curd.count({
      where: {
        name: Like(`%${query.keyWord}%`)
      },
    })
    return {
      data,
      total
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} curd`;
  }

  // 修改
  update(id: number, updateCurdDto: UpdateCurdDto) {
    return this.curd.update(id, updateCurdDto);
  }

  // 删除
  remove(id: number) {
    return this.curd.delete(id);
  }
}
