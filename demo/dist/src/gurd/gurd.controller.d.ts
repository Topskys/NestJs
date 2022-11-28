import { GurdService } from './gurd.service';
import { CreateGurdDto } from './dto/create-gurd.dto';
import { UpdateGurdDto } from './dto/update-gurd.dto';
export declare class GurdController {
    private readonly gurdService;
    constructor(gurdService: GurdService);
    create(createGurdDto: CreateGurdDto): string;
    findAll(url: string): string;
    findOne(id: string): string;
    update(id: string, updateGurdDto: UpdateGurdDto): string;
    remove(id: string): string;
}
