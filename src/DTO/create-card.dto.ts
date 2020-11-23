import { IsString, IsInt } from 'class-validator';

export class CreateCardDTO {
        @IsString()
        location: string;
        
        @IsString()
        model: string;
        

        @IsInt()
        price: number;


        @IsString()
        imagePath: string;

        @IsString()
        shortDetails: string;


        @IsString()
        category: string
        
        @IsInt()
        amount: number
}