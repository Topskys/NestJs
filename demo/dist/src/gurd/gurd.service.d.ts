import { CreateGurdDto } from './dto/create-gurd.dto';
import { UpdateGurdDto } from './dto/update-gurd.dto';
export declare class GurdService {
    create(createGurdDto: CreateGurdDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGurdDto: UpdateGurdDto): string;
    remove(id: number): string;
}
