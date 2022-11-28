import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
  Session,
  Inject,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// svgCaptcha
import * as svgCaptcha from 'svg-captcha';
// uuid
import * as uuid from 'uuid';





console.log(uuid.v4())
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
              @Inject("Config") private readonly config:any ,
              @Inject("ConfigDynamic") private readonly configDynamic:any ,
              ) {}

  //  生成验证码
  @Get('code')
  createCode(@Req() req, @Res() res,@Session() session){
    const captcha = svgCaptcha.create({
      size: 4,//生成几个验证码
      fontSize: 50, //文字大小
      width: 100,  //宽度
      height: 34,  //高度
      background: '#cc9966',  //背景颜色
    });
    session.code = captcha.text //存储验证码记录到session
    res.type('image/svg+xml')
    res.send(captcha.data)
  }


  @Post('create')
  createUser(@Req() req, @Body() body,@Session() session) {
    console.log(session.code, body)
    if (session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
      return {
        message: "验证码正确"
      }
    } else {
      return {
        message: "验证码错误"
      }
    }
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    // return this.userService.findAll();
    // return this.config; // 使用全局模块
    return this.configDynamic;// 使用全局动态模块
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id:number) {// ParseIntPipe ParseUUIDPipe
    console.log(typeof id)// 修改管道可以规定前端传输的数据类型，默认string
    // http://localhost:3000/user/f579908a-0acf-4783-94a2-618ec9d3e9c7
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }



}
