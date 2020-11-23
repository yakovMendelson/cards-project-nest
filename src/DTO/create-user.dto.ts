import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDTO {
        @IsString()
        firstname: string;
        
        @IsString()
        lastname: string;

        @IsEmail()
        email: string;

        @IsInt()
        age: number;

        @IsString()
        password: string;

        @IsString()
        token: string;
}