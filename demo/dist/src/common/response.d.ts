import { ExecutionContext, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
interface Data<T> {
    data: T;
}
export declare class ResponseInterceptor<T = any> implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Data<T>>;
}
export {};
