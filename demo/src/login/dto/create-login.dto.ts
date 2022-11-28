import {IsNotEmpty,IsString,IsNumber,Length} from 'class-validator'

//    安装 npm i class-transformer class-validator -S
export class CreateLoginDto {
    @IsNotEmpty()
    @IsString()
    @Length(5,10,{
        message:"输入字符长度应在5~10个"
    })
    name: string;
    @IsNotEmpty()
    @IsString()
    @Length(5,10,{
        message:"输入字符长度应在5~10个"
    })
    password:string;
    @IsNumber()
    age:number;


}
