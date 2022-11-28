// 响应拦截器
import { Injectable,ExecutionContext, NestInterceptor, CallHandler } from '@nestjs/common'
import { map } from 'rxjs/operators'
import {Observable} from 'rxjs'


interface Data<T>{
    data:T
}

@Injectable()
export class ResponseInterceptor<T = any> implements NestInterceptor {
    intercept(context:ExecutionContext, next: CallHandler):Observable<Data<T>> {
        return next.handle().pipe(map(data => {
            return {
                data,
                status:200,
                success:true,
                message:"成功"
            }
        }))
    }
}
