import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardsRepository } from '../reposetoryes/cards.reposetory';
import { CardsEntity } from '../entitis/cards.entity';
import { CreateCardDTO } from '../DTO/create-card.dto';
import { promises } from 'dns';

@Injectable()
export class CardsService {
    constructor(@InjectRepository(CardsRepository) private cardsRepository: CardsRepository) { }

    public async createCard(createCardDto: CreateCardDTO): Promise<CardsEntity> {
        return await this.cardsRepository.createCard(createCardDto);
    }


    public async getCards(): Promise<CardsEntity[]> {
        return await this.cardsRepository.find();
    }


    public async getCard(cardId: number): Promise<CardsEntity> {
        const foundCard = await this.cardsRepository.findOne(cardId);
        if (!foundCard) {
            throw new NotFoundException('Product not found');
        }
        return foundCard;
    }


    public async editCard(
        productId: number,
        createProductDto: CreateCardDTO,
        userId: number
    ):Promise<CardsEntity> {
        await this.cardsRepository.update({ id: productId }, { ...createProductDto });
        return this.cardsRepository.findOne(productId)

    }


    public async deleteCard(cardId: number): Promise<void> {
        await this.cardsRepository.delete(cardId);
    }
}



