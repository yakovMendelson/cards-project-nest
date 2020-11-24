import { EntityRepository, Repository } from "typeorm";
import { UsersEntity } from "../entitis/users.enttity";
import { CreateUserDTO } from "../DTO/create-user.dto";

@EntityRepository(UsersEntity)
export class UsersReposetory extends Repository<UsersEntity>{
    public async createUser(createProductDto: CreateUserDTO): Promise<UsersEntity> {
        
        const { firstname, lastname, email,age,password } = createProductDto;
        const user = new UsersEntity();
        console.log(firstname);
        
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.age = age;
        user.password = password
        await user.save();
        return user;
    }

}


