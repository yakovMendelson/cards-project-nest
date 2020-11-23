import { Controller, Get, ValidationPipe, Body, Post, Redirect, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersEntity } from '../entitis/users.enttity';
import { CreateUserDTO } from '../DTO/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersData:UsersService, private userToken: AuthService){}

    @Get('all')
    public async getCards(): Promise<UsersEntity[]> {
        const products = await this.usersData.getUsers();
        return products;
    }

    @Post('login')
    @UseGuards(AuthGuard)
    public async login(@Body() createUserDto: CreateUserDTO) {
        const product = await this.usersData.createUser(createUserDto); 
        return product;
    }
    
    @Post('sign-up')
    public async createtUser(@Body() createUserDto: CreateUserDTO) {
        const user = await this.usersData.createUser(createUserDto); 
        this.usersData.setCurrentUser();
        return user;
    }


    @Post('authenticate')
    async getToken(@Body() body: object) {
        let token =await this.userToken.authenticate(body['firstname'], body['email']);
        this.usersData.setToken(token);
        return {token}
    }
}
