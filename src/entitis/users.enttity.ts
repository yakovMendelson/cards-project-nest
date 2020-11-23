import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToMany } from 'typeorm';
import { CardsEntity } from './cards.entity';

@Entity()
export class UsersEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;
    
    @Column()
    age: number;
    
    @Column()
    password: string;


    
    // @ManyToMany(type => CardsEntity, card => card.users)
    // cards: CardsEntity[];
}