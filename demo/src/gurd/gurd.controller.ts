import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata} from '@nestjs/common';
import { GurdService } from './gurd.service';
import { CreateGurdDto } from './dto/create-gurd.dto';
import { UpdateGurdDto } from './dto/update-gurd.dto';
import {RoleGuard} from './role/role.guard';
import {ReqUrl, Role} from './role/role.decorator';
import {ApiOperation, ApiParam, ApiQuery,ApiResponse, ApiTags,ApiBearerAuth} from "@nestjs/swagger";




@Controller('gurd')
@UseGuards(RoleGuard) // 局部守卫
@ApiTags("守卫接口")
@ApiBearerAuth() // 需要token接口（文档）
export class GurdController {
  constructor(private readonly gurdService: GurdService) {}

  @Post()
  create(@Body() createGurdDto: CreateGurdDto) {
    return this.gurdService.create(createGurdDto);
  }

  @Get()
  // @SetMetadata('role',['admin']) // 1
  // 有admin权限，才可以访问接口
  // http://localhost:3000/gurd?role=admin yes
  // http://localhost:3000/gurd?role=3 no
  // 自定义装饰器，也可以实现以上访问权限
  @Role('admin') // 2
  @ApiOperation({summary:"需要权限接口",description:"需要role=admin的GET接口"})
  @ApiQuery({name:"page",description:"分页描述"})
  @ApiResponse({status:403,description:"小黑子"})
  findAll(@ReqUrl("3434") url:string) {
    console.log("自定义2装饰器 url:",url)
    return this.gurdService.findAll();
  }

  @Get(':id')
  @ApiParam({name:":id",description:"动态id的GET接口",required:true})
  findOne(@Param('id') id: string) {
    return this.gurdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGurdDto: UpdateGurdDto) {
    return this.gurdService.update(+id, updateGurdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gurdService.remove(+id);
  }
}
