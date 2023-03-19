import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
export declare class PaisesService {
    create(createPaiseDto: CreatePaiseDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updatePaiseDto: UpdatePaiseDto): string;
    remove(id: number): string;
}
