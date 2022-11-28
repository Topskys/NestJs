import { DynamicModule } from "@nestjs/common";
export declare class ConfigModule {
}
interface Options {
    path: string;
}
export declare class ConfigDynamicModule {
    static forRoot(options: Options): DynamicModule;
}
export {};
