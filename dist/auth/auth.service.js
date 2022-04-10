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
exports.AuthService = void 0;
const passport_1 = require("@nestjs/passport");
const passport_42_1 = require("passport-42");
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto-classes/user.dto");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
(0, dotenv_1.config)();
let AuthService = class AuthService extends (0, passport_1.PassportStrategy)(passport_42_1.Strategy, '42') {
    constructor(usersRepository, jwtService) {
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
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        done(null, user);
    }
    async googleLogin(req) {
        if (!req.user) {
            return 'No user from google';
        }
        const userId = req.user.email;
        const payload = { userId: userId };
        const token = this.jwtService.sign(payload);
        ;
        console.log(token);
        console.log(payload);
        let userDto = new user_dto_1.UserDto();
        userDto.email = req.user.email;
        userDto.firstName = req.user.firstName;
        userDto.lastName = req.user.lastName;
        userDto.picture = req.user.picture;
        userDto.isActive = true;
        userDto.userName = "test_username*118";
        return {
            message: 'User information from Intra',
            user: req.user,
            token: token
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map