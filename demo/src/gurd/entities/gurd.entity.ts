import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated} from 'typeorm'
import {type} from "os";




@Entity()
export class Guard {
    //自增列
    @PrimaryGeneratedColumn()
    id:number
    //普通列
    @Column({type:"varchar",length:255})
    name:string
    @Generated("uuid")
    uuid:string
    @Column()
    version:string
    @Column({select:true,comment:"注释",default:"成员1，成员2",nullable:true}) // select:true 查询时会被过滤掉
    members:string
    @Column("simple-array")
    names:string[]
    @Column("simple-json")
    json:{name:string,uuid:string}
    @Column()
    introduction:string
    @Column()
    platform:string
    @Column()
    publish:string
    @Column({type:"enum",enum:["待审核","审核中","完成"],default:"待审核"})
    status:string
    @CreateDateColumn({type:"timestamp"})
    createTime:Date
}
