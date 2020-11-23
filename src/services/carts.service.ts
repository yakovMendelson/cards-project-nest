import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardsRepository } from '../reposetoryes/cards.reposetory';
import { CardsEntity } from '../entitis/cards.entity';
import { CreateCardDTO } from '../DTO/create-card.dto';
import { CreateCartDTO } from '../DTO/create-cart.dto';
import { CartsRepository } from '../reposetoryes/carts.reposetory';
import { CartEntity } from '../entitis/cart.entity';

@Injectable()
export class CartsService {
    // constructor(@InjectRepository(CartsRepository)  private cartsRepository: CartsRepository) { }

    // public async createCart(createCartDto: CreateCartDTO): Promise<CartEntity> {
    //     return await this.cartsRepository.createCart(createCartDto);
    // }


    // public async getCarts(): Promise<CardsEntity[]> {
    //     return await this.cardsRepository.find();
    // }


    // public async getCart(cardId: number): Promise<CardsEntity> {
    //     const foundCard = await this.cardsRepository.findOne(cardId);
    //     if (!foundCard) {
    //         throw new NotFoundException('Product not found');
    //     }
    //     return foundCard;
    // }


    // public async editCart(
    //     productId: number,
    //     createProductDto: CreateCardDTO,
    // ): Promise<CardsEntity> {
    //     const editedProduct = await this.cardsRepository.findOne(productId);
    //     if (!editedProduct) {
    //         throw new NotFoundException('Product not found');
    //     }
    //     return this.cardsRepository.editCard(createProductDto, editedProduct);
    // }


    // public async deleteCart(cardId: number): Promise<void> {
    //     await this.cardsRepository.delete(cardId);
    // }
}
