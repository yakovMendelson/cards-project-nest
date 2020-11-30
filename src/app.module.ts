import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsController } from './controllers/cards.controller';
import { CardsService } from './services/cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsEntity } from './entitis/cards.entity';
import { CardsRepository } from './reposetoryes/cards.reposetory';
import { UsersEntity } from './entitis/users.enttity';
import { CartEntity } from './entitis/cart.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersReposetory } from './reposetoryes/users.reposetory';
import { CartsController } from './controllers/carts.controller';
import { CartsService } from './services/carts.service';
import { CartsRepository } from './reposetoryes/carts.reposetory';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
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
    // logging: true,
    keepConnectionAlive: true
  }),
  TypeOrmModule.forFeature([CardsRepository,UsersReposetory,CartsRepository]),
  JwtModule.register({
    secret: 'yakov',
    signOptions: { expiresIn: '60000s' },
  }),],

  controllers: [AppController, CardsController, UsersController, CartsController],
  providers: [AppService, CardsService, UsersService, CartsService, AuthService],
})
export class AppModule { }
