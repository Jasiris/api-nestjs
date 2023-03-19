import { PaisesService } from './paises.service';
import { CreatePaiseDto } from './dto/create-paise.dto';
import { UpdatePaiseDto } from './dto/update-paise.dto';
export declare class PaisesController {
    private readonly paisesService;
    constructor(paisesService: PaisesService);
    create(createPaiseDto: CreatePaiseDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updatePaiseDto: UpdatePaiseDto): string;
    remove(id: string): string;
}
