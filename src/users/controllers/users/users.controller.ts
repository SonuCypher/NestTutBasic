import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return {
            username:'jhon doe',role:'admin'
        }
    }

    @Get('posts')
    getUsersPost() {
        return {
            username:'jhon doe',post:'jhon posts'
        }
    }

    // @Post()
    // createUser(@Req() req:Request , @Res() res:Response) {
    //     res.json(req.body);
    // }

    @Post()
    createUser(@Body()){

    }

}
