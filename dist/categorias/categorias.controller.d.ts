import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: string): string;
}
