import { Module } from '@nestjs/common';
import { GurdService } from './gurd.service';
import { GurdController } from './gurd.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Guard} from './entities/gurd.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Guard])],
  controllers: [GurdController],
  providers: [GurdService]
})
export class GurdModule {}
