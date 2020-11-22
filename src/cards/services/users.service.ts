import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersReposetory } from '../reposetoryes/users.reposetory';
import { CreateUserDTO } from '../DTO/create-user.dto';
import { UsersEntity } from '../entitis/users.enttity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersReposetory)  private userRepository: UsersReposetory) { }

    public async createUser(createUserDto: CreateUserDTO) {
        let users = await this.getUsers()
       let test = users.filter(user=>user.email == createUserDto.email);
       if (test.length>0)
       return {error:"האימייל כבר קיים במערכת"}
       
        return await this.userRepository.createCard(createUserDto);
    }
    public async getUsers(): Promise<UsersEntity[]> {
        return await this.userRepository.find();
    }
}
