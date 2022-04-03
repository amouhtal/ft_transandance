"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async InsertUser(UserDto) {
        const userData = await this.usersRepository.create(UserDto);
        await this.usersRepository.save(userData);
    }
    async findAll() {
        const iser = await this.usersRepository.query(`select "winner_user","loser_user","Score","played_at" from "Games" where winner_user='amouhtal' or loser_user='amouhtal'`);
        console.log(iser);
        const bothUsers = new Array();
        iser.forEach(element => {
            let obj = {
                winner: {
                    userName: element.winner_user,
                    image: "test",
                    score: element.Score.split("-")[0]
                },
                loser: {
                    userName: element.loser_user,
                    image: "test",
                    score: element.Score.split("-")[1]
                },
                date: element.played_at
            };
            bothUsers.push(obj);
        });
        return bothUsers;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map