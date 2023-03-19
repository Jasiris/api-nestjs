import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
export declare class MarcasService {
    create(createMarcaDto: CreateMarcaDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateMarcaDto: UpdateMarcaDto): string;
    remove(id: number): string;
}
