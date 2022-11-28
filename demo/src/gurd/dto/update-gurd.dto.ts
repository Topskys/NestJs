import { PartialType } from '@nestjs/mapped-types';
import { CreateGurdDto } from './create-gurd.dto';

export class UpdateGurdDto extends PartialType(CreateGurdDto) {}
