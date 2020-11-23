import { Controller, Post, Body, ValidationPipe } from "@nestjs/common";

import { CreateCartDTO } from "../DTO/create-cart.dto";
import { CartsService } from "../services/carts.service";


@Controller('shopping_carts')
export class CartsController {
    constructor(private cartData: CartsService) { }

    // @Post('create')
    // public async createCart(
    //     @Body(ValidationPipe) createCartDto: CreateCartDTO,
    // ) {
    //     const product = await this.cartData.createCart(createCartDto);
    //     return product;
    // }
}