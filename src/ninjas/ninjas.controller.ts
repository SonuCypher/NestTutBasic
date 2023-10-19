import { Controller, Get } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    @Get()
    getNinjas(){
        return ["ninjas"];
    }

    @Get(':id')
    getOneNinja(){
        return {};
    }
}
