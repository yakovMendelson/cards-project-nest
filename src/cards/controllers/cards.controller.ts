import { Controller, Get, Post, Body, ValidationPipe, Patch, Param } from '@nestjs/common';
import { CardsService } from '../services/cards.service';
import { CreateCardDTO } from '../dto/create-card.dto';
import { CardsEntity } from '../entitis/cards.entity';


@Controller('cards')
export class CardsController {
    constructor(private cardsData:CardsService){}
    @Get('all')
    public async getCards(): Promise<CardsEntity[]> {
        const products = await this.cardsData.getCards();
        return products;
    }

    @Post('create')
    public async createProduct(
        @Body(ValidationPipe) createProductDto: CreateCardDTO,
    ) {
        const product = await this.cardsData.createCard(createProductDto); 
        return product;
    }



    @Patch('/edit/:productId/:userId')
    public async editPro(
        @Body(ValidationPipe) createCardDto: CreateCardDTO,
        @Param('productId') cardId: number,
        @Param('userId') userId: number,
    ):Promise<CardsEntity>  {
        const card = await this.cardsData.editCard(
            cardId,
            createCardDto,
            userId
        );
        return card
    }
}
