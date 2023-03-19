import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

const db = [
  {
    id: 1,
    name: 'primera generacion',
  },
  {
    id: 2,
    name: 'segunda generacion',
  },
  {
    id: 3,
    name: 'tercera generacion',
  },
  {
    id: 4,
    name: 'cuarta generacion',
  }
];
@Injectable()
export class GenerosService {
  create(createGeneroDto: CreateGeneroDto) {
    return 'This action adds a new genero';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} genero`;
  }

  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }
}
