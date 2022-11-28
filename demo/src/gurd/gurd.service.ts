import { Injectable } from '@nestjs/common';
import { CreateGurdDto } from './dto/create-gurd.dto';
import { UpdateGurdDto } from './dto/update-gurd.dto';

@Injectable()
export class GurdService {
  create(createGurdDto: CreateGurdDto) {
    return 'This action adds a new gurd';
  }

  findAll() {
    return `This action returns all gurd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gurd`;
  }

  update(id: number, updateGurdDto: UpdateGurdDto) {
    return `This action updates a #${id} gurd`;
  }

  remove(id: number) {
    return `This action removes a #${id} gurd`;
  }
}
