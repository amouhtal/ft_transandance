import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Games } from "./entities/game.entity";
import { User } from "./entities/user.entity";

// ['**/*.entity{.ts,.js}']

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'trans',
    entities: [User, Games],
    synchronize: true
}