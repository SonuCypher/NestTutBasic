import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
    @Get()
    getNinjas(){
        return ["ninjas assasin assembled"];
    }

    @Get(':id')
    getOneNinja(@Param('id') id: string){
        return {
            id,
        };
    }

    @Post()
    createNinja(){
        return{}
    }

    @Put(':id')
    updateNinja(@Param('id') id: string){
        return{}
    }

    @Delete('id')
    removeNinja(){
        return{}
    }

}
