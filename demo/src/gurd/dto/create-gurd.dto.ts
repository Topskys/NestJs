import {ApiProperty} from "@nestjs/swagger";

export class CreateGurdDto {

    @ApiProperty({example: "小猫"})
    name: string;
    @ApiProperty({example: "123456x"})
    password:string;
    @ApiProperty({example: 18})
    age:number;
}
