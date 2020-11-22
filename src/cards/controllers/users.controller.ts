import { Controller, Get, ValidationPipe, Body, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersEntity } from '../entitis/users.enttity';
import { CreateUserDTO } from '../DTO/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersData:UsersService){}

    @Get('all')
    public async getCards(): Promise<UsersEntity[]> {
        const products = await this.usersData.getUsers();
        return products;
    }



    
    @Post('create')
    public async createProduct(
        @Body(ValidationPipe) createUserDto: CreateUserDTO,
    ) {
        const product = await this.usersData.createUser(createUserDto); 
        return product;
    }
}
