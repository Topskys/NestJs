import { CreateCurdDto } from './dto/create-curd.dto';
import { UpdateCurdDto } from './dto/update-curd.dto';
import { Repository } from "typeorm";
import { Curd } from "./entities/curd.entity";
export declare class CurdService {
    private readonly curd;
    constructor(curd: Repository<Curd>);
    create(createCurdDto: CreateCurdDto): Promise<Curd>;
    findAll(query: {
        keyWord: string;
        page: number;
        pageSize: number;
    }): Promise<{
        data: Curd[];
        total: number;
    }>;
    findOne(id: number): string;
    update(id: number, updateCurdDto: UpdateCurdDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
