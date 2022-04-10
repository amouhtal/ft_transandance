"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const game_entity_1 = require("./entities/game.entity");
const user_entity_1 = require("./entities/user.entity");
exports.typeOrmConfig = {
    type: "postgres",
    host: '192.168.99.100',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'trans',
    entities: [user_entity_1.User, game_entity_1.Games],
    synchronize: true
};
//# sourceMappingURL=typeormcofig.js.map