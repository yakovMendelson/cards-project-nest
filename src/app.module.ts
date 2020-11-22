import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './cards/controllers/cards.controller';
import { CardsService } from './cards/services/cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsEntity } from './cards/entitis/cards.entity';
import { CardsRepository } from './cards/reposetoryes/cards.reposetory';
import { UsersEntity } from './cards/entitis/users.enttity';
import { CartEntity } from './cards/entitis/cart.entity';
import { UsersController } from './cards/controllers/users.controller';
import { UsersService } from './cards/services/users.service';
import { UsersReposetory } from './cards/reposetoryes/users.reposetory';
import { CartsController } from './cards/controllers/carts.controller';
import { CartsService } from './cards/services/carts.service';
import { CartsRepository } from './cards/reposetoryes/carts.reposetory';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username:'postgres',
    password: 'yakov1704',
    database: 'cards',
    entities: [CardsEntity,UsersEntity,CartEntity],
    synchronize: true,
    logging: true,
    keepConnectionAlive: true
  }),
  TypeOrmModule.forFeature([CardsRepository,UsersReposetory,CartsRepository]),
  JwtModule.register({
    secret: 'yakov',
    signOptions: { expiresIn: '60s' },
  }),],

  controllers: [AppController, CardsController, UsersController, CartsController],
  providers: [AppService, CardsService, UsersService, CartsService],
})
export class AppModule {}
