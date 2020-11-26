import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private dataSER: UsersService, private jwt: JwtService) { }
    authenticate(firstname: string, email: string) {
         return this.jwt.sign({ email: email, firstname: firstname })
    }

    chakeUser(password: string, email: string){
       return this.dataSER.getUserByCodeEmail(password,email)
    }
}