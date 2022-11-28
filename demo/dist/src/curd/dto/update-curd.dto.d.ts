import { CreateCurdDto } from './create-curd.dto';
declare const UpdateCurdDto_base: import("@nestjs/common").Type<Partial<CreateCurdDto>>;
export declare class UpdateCurdDto extends UpdateCurdDto_base {
    name: string;
    desc: string;
}
export {};
