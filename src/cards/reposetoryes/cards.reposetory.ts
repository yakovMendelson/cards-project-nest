import { Repository, EntityRepository } from 'typeorm';

import { CreateCardDTO } from '../DTO/create-card.dto';
import { CardsEntity } from '../entitis/cards.entity';
import { UsersReposetory } from './users.reposetory';
import { InjectRepository } from '@nestjs/typeorm';


@EntityRepository(CardsEntity)
export class CardsRepository extends Repository<CardsEntity> {
constructor(@InjectRepository(CardsRepository)  private useSER:UsersReposetory){
    super();
}
    public async createCard(createCardDto: CreateCardDTO): Promise<CardsEntity> {
        const { location, model, price,imagePath,shortDetails ,category, amount} = createCardDto;
        const card = new CardsEntity();
        card.location = location;
        card.model = model;
        card.price = price;
        card.imagePath = imagePath;
        card.shortDetails = shortDetails;
        card.category =category;
        card.amount = amount;
        await card.save();
        return card;
    }
}