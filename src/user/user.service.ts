import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "src/dto-classes/user.dto";
import { User } from "src/entities/user.entity";
import { arrayBuffer } from "stream/consumers";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}
        public async InsertUser( UserDto : UserDto) {
            const userData = await this.usersRepository.create(UserDto);
            await this.usersRepository.save(userData);
            // return "Message Receiver!";
        }

        public async findAll() {
        const iser = await this.usersRepository.query(`select "winner_user","loser_user","Score","played_at" from "Games" where winner_user='amouhtal' or loser_user='amouhtal'`)
        console.log(iser);  
        const bothUsers = new Array()  

        iser.forEach(element => {
          let obj ={
            winner: {
                userName:element.winner_user,
                image:"test",
                      
                score:element.Score.split("-")[0]
                },
                loser:{
                    userName:element.loser_user,
                    image:"test",
                    score:element.Score.split("-")[1]
                  },
                date:element.played_at
          }
          bothUsers.push(obj)
        });
            return bothUsers;
          }

}

// public async create(user : User) {
//     const newUser = await this.usersRepository.create(user);
//     // console.log(await this.usersRepository.save(user));
//     await this.usersRepository.save(newUser);

//     return newUser;
// }