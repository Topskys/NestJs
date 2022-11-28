"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqUrl = exports.Role = void 0;
const common_1 = require("@nestjs/common");
const Role = (...args) => (0, common_1.SetMetadata)('role', args);
exports.Role = Role;
exports.ReqUrl = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    console.log("自定义装饰器2-data：", data);
    return req.url;
});
//# sourceMappingURL=role.decorator.js.map