import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

// 用于生成表
@Entity()
export class Curd {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:"varchar",length:255})
    name: string;
    @Column({type:"varchar",length:255})
    desc:string;
}
