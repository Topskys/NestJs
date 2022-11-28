import { AppService } from './app.service';
import { UserService } from "./user/user.service";
export declare class AppController {
    private readonly appService;
    private shopList;
    private readonly cc;
    private readonly userService;
    constructor(appService: AppService, shopList: string[], cc: number, userService: UserService);
    getHello(): string;
    getHello2(): number;
    getHello3(): string;
}
