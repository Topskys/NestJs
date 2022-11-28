"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const app_service2_1 = require("./app.service2");
const user_module_1 = require("./user/user.module");
const config_module_1 = require("./config/config.module");
const upload_module_1 = require("./upload/upload.module");
const login_module_1 = require("./login/login.module");
const spider_module_1 = require("./spider/spider.module");
const gurd_module_1 = require("./gurd/gurd.module");
const typeorm_1 = require("@nestjs/typeorm");
const curd_module_1 = require("./curd/curd.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                username: "root",
                password: "123456",
                host: "localhost",
                port: 3306,
                database: "test",
                synchronize: true,
                retryDelay: 500,
                retryAttempts: 10,
                autoLoadEntities: true,
            }), user_module_1.UserModule, config_module_1.ConfigModule, config_module_1.ConfigDynamicModule.forRoot({
                path: "/configDynamic"
            }), upload_module_1.UploadModule, login_module_1.LoginModule, spider_module_1.SpiderModule, gurd_module_1.GurdModule, curd_module_1.CurdModule],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service2_1.AppService2,
            {
                provide: "AS",
                useClass: app_service_1.AppService,
            },
            {
                provide: "BB",
                useValue: ['TB', 'PDD', 'JD', 'WPH'],
            },
            {
                provide: "CC",
                inject: [app_service2_1.AppService2],
                async useFactory(AppService2) {
                    return await new Promise((r) => {
                        setTimeout(() => {
                            r(AppService2.getHello());
                        }, 2000);
                    });
                }
            }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map