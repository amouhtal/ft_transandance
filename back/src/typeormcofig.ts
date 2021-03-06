import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { RefreshToken } from "./auth/entities/refresh-token.entity";
import { Games } from "./entities/game.entity";
import { User } from "./entities/user.entity";

// ['**/*.entity{.ts,.js}']

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: "postgres",
    host: '192.168.99.102',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'trans',
    entities: [User, Games, RefreshToken],
    synchronize: true
}