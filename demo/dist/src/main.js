"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const session = require("express-session");
const path_1 = require("path");
const response_1 = require("./common/response");
const exception_1 = require("./common/exception");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const whiteList = ["/user/1"];
function MiddlewareAll(req, res, next) {
    console.log(req.originalUrl, "全局中间件");
    next();
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(MiddlewareAll);
    app.use(session({
        secret: "XiaoMan",
        name: "xm.session",
        rolling: true,
        cookie: {
            httpOnly: true,
            maxAge: 99999 || null,
        }
    }));
    app.useStaticAssets((0, path_1.join)(__dirname, "images"), {
        prefix: "/xiaoman"
    });
    app.useGlobalInterceptors(new response_1.ResponseInterceptor());
    app.useGlobalFilters(new exception_1.HttpFilter());
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder().addBearerAuth().setTitle('Topsky api-docs').setDescription('Description').setVersion('1').build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map