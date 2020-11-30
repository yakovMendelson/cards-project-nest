import { Controller, Get, ValidationPipe, Body, Post, Redirect, UseGuards, ForbiddenException, Delete, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersEntity } from '../entitis/users.enttity';
import { CreateUserDTO } from '../DTO/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/guards/auth.guard';

import * as nodemailer from "nodemailer"

@Controller('users')
export class UsersController {
    constructor(private usersData: UsersService, private userToken: AuthService) { }

    @Get('all')
    public async getCards(): Promise<UsersEntity[]> {
        const products = await this.usersData.getUsers();
        return products;
    }

    // @Post('auth')
    // @UseGuards(AuthGuard)
    // public async login(@Body() token:any) {
    //     const user = UsersService
    //     return user;
    // }

    @Post('sign-up')
    public async createtUser(@Body() createUserDto: CreateUserDTO) {
        const user = await this.usersData.createUser(createUserDto);
        let token = await this.userToken.authenticate(createUserDto['firstname'], createUserDto['email']);
        return { ...user, token };
    }


    @Post('login')
    async getUserByToken(@Body() body: object) {
        let user = await this.userToken.chakeUser(body['password'], body['email']);


        if (user) {
            let token = await this.userToken.authenticate(user['firstname'], user['email']);
            return { ...user, token }
        }
        else
            throw new ForbiddenException('invalid')
    }


    @Post('email')
    postEmail(@Body() body) {


        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'dassitoubin@gmail.com',
                pass: '313122673'
            }
        });

        var mailOptions = {
            from: 'dassitoubin@gmail.com',
            to: 'dassitoubin@gmail.com',
            subject: body.subject,
            text: body.text+'\nכתובת אימייל של הלקוח\n'+body.email
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }


}
