import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
export declare class MarcasController {
    private readonly marcasService;
    constructor(marcasService: MarcasService);
    create(createMarcaDto: CreateMarcaDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateMarcaDto: UpdateMarcaDto): string;
    remove(id: string): string;
}
