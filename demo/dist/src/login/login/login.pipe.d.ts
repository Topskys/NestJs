import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class LoginPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
