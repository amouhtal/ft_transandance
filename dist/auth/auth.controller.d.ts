import { HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googleAuth(req: any): Promise<void>;
    asyncgoogleAuthRedirect(req: any, response: Response): Promise<{
        userInfo: any;
        statusCode: HttpStatus;
        url: string;
    }>;
}
