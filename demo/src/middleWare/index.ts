import { Injectable, NestMiddleware } from '@nestjs/common';
// 引入类型以获得代码提示
import {Request,Response,NextFunction} from 'express';

@Injectable()
export class Logger implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("自定义日志中间件,不适用nest g mi logger生成的")
        next();
    }
}
