import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private dataSER: UsersService, private jwt: JwtService) { }
    async authenticate(firstname: string, email: string) {
        let user = await this.dataSER.getUserById(firstname, email);
        if (user)
            throw console.error({ error: "האימייל כבר קיים במערכת" });
        return this.jwt.sign({ email: email, firstname: firstname })
    }
}