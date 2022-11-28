import { CurdService } from './curd.service';
import { CreateCurdDto } from './dto/create-curd.dto';
import { UpdateCurdDto } from './dto/update-curd.dto';
export declare class CurdController {
    private readonly curdService;
    constructor(curdService: CurdService);
    create(createCurdDto: CreateCurdDto): Promise<import("./entities/curd.entity").Curd>;
    findAll(query: {
        keyWord: string;
        page: number;
        pageSize: number;
    }): Promise<{
        data: import("./entities/curd.entity").Curd[];
        total: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateCurdDto: UpdateCurdDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
