import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasService {
    create(createCategoriaDto: CreateCategoriaDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: number): string;
}
