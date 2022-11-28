import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    private readonly config;
    private readonly configDynamic;
    constructor(userService: UserService, config: any, configDynamic: any);
    createCode(req: any, res: any, session: any): void;
    createUser(req: any, body: any, session: any): {
        message: string;
    };
    create(createUserDto: CreateUserDto): string;
    findAll(): any;
    findOne(id: number): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
