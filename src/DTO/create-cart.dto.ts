import { IsInt } from 'class-validator';

export class CreateCartDTO {
    @IsInt()
    user_id: number;
    
    @IsInt()
    cart_id:number;
}