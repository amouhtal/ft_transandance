export declare class AppService {
    getHello(): string;
    googleLogin(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
