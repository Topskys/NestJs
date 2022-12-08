import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated} from 'typeorm'


@Entity()
export class Excel {
    //自增列
    @PrimaryGeneratedColumn()
    id:number
    @Column({type:"varchar",length:255})
    name:string
    @Column({type:"varchar",length:255})
    phone:string
    // @Column("simple-json")
    // json:{name:string,uuid:string}
    @CreateDateColumn({type:"timestamp"})
    createTime:Date
}
