import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDto } from "src/dto-classes/user.dto";
import { Games } from "src/entities/game.entity";
import { User } from "src/entities/user.entity";
import { arrayBuffer } from "stream/consumers";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
        private usersRepository: Repository<User>,
      )
      {

      }
      public async InsertUser( userDto : UserDto)
      {
            // const userData = await this.usersRepository.create(userDto);
            // await this.usersRepository.save(userData);
            try
            {
            const userData = await this.usersRepository.createQueryBuilder().insert().into('Users').values(userDto).onConflict('("id") DO NOTHING').execute();
            
            }
            catch
            {
              return "Message Receiver!";
            }
      }

        public async findAll() {
          /*
          const userff = await this.usersRepository.createQueryBuilder()
          .select('Games.winner_user').addSelect('Games.loser_user').addSelect('Games.Score').addSelect('Games.played_at')
          .from(Games, "Games").where("Games.winner_user= :value or Games.loser_user=:value", {value: "test_username3"}).getMany();
          
          console.log("=>", userff);
        const bothUsers = new Array()  

        userff.forEach(element => {
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
            return bothUsers;*/
        return await this.usersRepository.query(`select * from Users`);

          }

}

// public async create(user : User) {
//     const newUser = await this.usersRepository.create(user);
//     // console.log(await this.usersRepository.save(user));
//     await this.usersRepository.save(newUser);

//     return newUser;
// }