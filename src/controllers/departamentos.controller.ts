import { Controller, Get } from '@nestjs/common';
import { DepartamentosService } from '../services/departamentos.service';

@Controller('departamentos')
export class DepartamentosController {
    constructor(private readonly departamentosService: DepartamentosService) {}

    @Get()
    async findAll() {
        return this.departamentosService.findAll();
    }
    
}
