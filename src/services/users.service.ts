import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersReposetory } from '../reposetoryes/users.reposetory';
import { CreateUserDTO } from '../DTO/create-user.dto';
import { UsersEntity } from '../entitis/users.enttity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersReposetory) private userRepository: UsersReposetory, private jwt: JwtService) { }

    private currentUser:UsersEntity;
    private token: string
    public createUser(createUserDto: CreateUserDTO) {
        return this.userRepository.createUser(createUserDto);
    }
    public getUsers(): Promise<UsersEntity[]> {
        return this.userRepository.find();
    }

    public getUserById(firstname, email): Promise<UsersEntity> {
        return this.userRepository.findOne({ firstname, email });
    }

    public async setCurrentUser() {
        let verify = this.jwt.verify(this.token)
        let firstname = verify.firstname;
        let email = verify.email;
        let user = await this.userRepository.findOne({ firstname, email })
        this.currentUser = user
    }

    public setToken(token) {
        this.token = token
    }

    public getCurrentUser(){
        return this.currentUser
    }
}
