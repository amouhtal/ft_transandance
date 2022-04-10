import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-42';
// import { UserDto } from "src/dto-classes/user.dto";

import { config } from 'dotenv';

import { HttpException, Injectable, Res } from '@nestjs/common';
import { UserDto } from 'src/dto-classes/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { appendFile } from 'fs';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';

config();

@Injectable()
export class AuthService extends PassportStrategy(Strategy, '42') {

  constructor( @InjectRepository(User)
  private usersRepository: Repository<User>
  ,private jwtService: JwtService)
  {
    super({
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: 'http://127.0.0.1:3000/auth/42/callback',
      profileFields: {
        'id': function (obj) { return String(obj.id); },
        'username': 'login',
        'displayName': 'displayname',
        'name.familyName': 'last_name',
        'name.givenName': 'first_name',
        'profileUrl': 'url',
        'emails.0.value': 'email',
        'phoneNumbers.0.value': 'phone',
        'photos.0.value': 'image_url'
      }
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    }
    done(null, user);
  }
  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    
    const userId = req.user.email;
    
    
    const payload = { userId: userId };
    const token = this.jwtService.sign(payload);;
    console.log(token);
    // const token = this.jwtService.sign(payload);
    
    console.log(payload);
    // response.cookie('access_token', token, {
    //   httpOnly: true,
    //   domain: 'localhost', // your domain here!
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    // })
    // .send({ success: true });
    let userDto = new UserDto();
    userDto.email = req.user.email;
    userDto.firstName = req.user.firstName;
    userDto.lastName = req.user.lastName;
    userDto.picture = req.user.picture;
    userDto.isActive = true;
    userDto.userName = "test_username*118";
   
      // await this.usersRepository.createQueryBuilder().insert().into('Users').values(userDto).onConflict('("userName") DO NOTHING').execute();
      // console.log(userDto);

    // await this.usersRepository.save(userDto);

    //  insert into "Users" (id,"firstName","lastName", "userName","email") values (9,'ftest', 'lname', 'username', 'etest');
    // const iser = await this.usersRepository.query(`insert into Users 'winner_user,"loser_user","Score","played_at" from "Games" where winner_user='amouhtal' or loser_user='amouhtal'`);

    return {
      message: 'User information from Intra',
      user: req.user,
      token : token
    }
  }
}
