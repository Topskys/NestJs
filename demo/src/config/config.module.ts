import {Module, Global, DynamicModule} from "@nestjs/common";
// 全局模块

@Global()
@Module({
    providers: [
        {
            provide:"Config",
            useValue:{baseUrl:"/api"}
        }
    ],
    exports: [
        {
            provide:"Config",
            useValue:{baseUrl:"/api"}
        }
    ]
})
export class ConfigModule {}



// 动态模块
interface Options{
    path: string;
}

export class ConfigDynamicModule {
    static forRoot(options:Options): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide:"ConfigDynamic",
                    useValue:{baseUrl:"/api"+options.path}
                }
            ],
            exports: [
                {
                    provide:"ConfigDynamic",
                    useValue:{baseUrl:"/api"+options.path}
                }
            ]
        }
    }
}
