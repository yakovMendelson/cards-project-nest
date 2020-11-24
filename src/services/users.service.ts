import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersReposetory } from '../reposetoryes/users.reposetory';
import { CreateUserDTO } from '../DTO/create-user.dto';
import { UsersEntity } from '../entitis/users.enttity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UsersReposetory) private userRepository: UsersReposetory, private jwt: JwtService) { }

    private currentUser: UsersEntity;
    private token: string
    public async createUser(createUserDto: CreateUserDTO) {
        let firstname = createUserDto.firstname
        let email = createUserDto.email
        await this.CheckTheUser(firstname, email)
        return this.userRepository.createUser(createUserDto);
    }
    public getUsers(): Promise<UsersEntity[]> {
        return this.userRepository.find();
    }

    public getUserById(firstname, email): Promise<UsersEntity> {
        return this.userRepository.findOne({ firstname, email });
    }

    public async getCurrentUser(token) {
        let verify
        try {
            verify = this.jwt.verify(token)
        } catch (error) {
            throw new Error("verify");
        }

        let firstname = verify.firstname;
        let email = verify.email;
        let user = await this.userRepository.findOne({ firstname, email })
        return user
    }
    // Check if the user exists
    private async CheckTheUser(firstname, email){
        let user = await this.getUserById(firstname, email);
        if (user)
            throw new ForbiddenException("The email already exists in the system" );
    }
}
