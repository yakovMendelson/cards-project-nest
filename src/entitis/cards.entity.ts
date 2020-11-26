import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToMany, JoinTable } from 'typeorm';
import { UsersEntity } from './users.enttity';

@Entity()
export class CardsEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    model: string;

    @Column()
    price: number;

    @Column()
    imagePath: string;
    
    @Column()
    shortDetails: string;

    @Column()
    category: string;

    // @Column()
    // amount: number;


    // @ManyToMany(type => UsersEntity, user => user.cards)
    // @JoinTable()
    // users:UsersEntity[]
}
