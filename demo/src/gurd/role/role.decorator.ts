import {applyDecorators, createParamDecorator, ExecutionContext, SetMetadata} from '@nestjs/common';
import {Request} from "express";

// 自定义装饰器1
export const Role = (...args: string[]) => SetMetadata('role', args);


// 自定义装饰器2
export const ReqUrl=createParamDecorator((data: string,ctx:ExecutionContext)=>{
    const req=ctx.switchToHttp().getRequest<Request>();
    console.log("自定义装饰器2-data：",data)
    return req.url;
    // return applyDecorators(Role,装饰器1，装饰器2，...) // 组合装饰器同一导出
})

