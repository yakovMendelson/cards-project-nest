import { EntityRepository, Repository } from "typeorm";
import { CartEntity } from "../entitis/cart.entity";
import { CreateCartDTO } from "../DTO/create-cart.dto";

@EntityRepository(CartEntity)
export class CartsRepository extends Repository<CartEntity> {

    public async createCart(createCartDto: CreateCartDTO): Promise<CartEntity> {
        const {user_id, cart_id } = createCartDto;
        const cart = new CartEntity();
        cart.user_id = user_id;
        cart.card_id =cart_id
        await cart.save();
        return cart;
    }
}