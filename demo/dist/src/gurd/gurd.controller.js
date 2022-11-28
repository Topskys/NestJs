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
exports.GurdController = void 0;
const common_1 = require("@nestjs/common");
const gurd_service_1 = require("./gurd.service");
const create_gurd_dto_1 = require("./dto/create-gurd.dto");
const update_gurd_dto_1 = require("./dto/update-gurd.dto");
const role_guard_1 = require("./role/role.guard");
const role_decorator_1 = require("./role/role.decorator");
const swagger_1 = require("@nestjs/swagger");
let GurdController = class GurdController {
    constructor(gurdService) {
        this.gurdService = gurdService;
    }
    create(createGurdDto) {
        return this.gurdService.create(createGurdDto);
    }
    findAll(url) {
        console.log("自定义2装饰器 url:", url);
        return this.gurdService.findAll();
    }
    findOne(id) {
        return this.gurdService.findOne(+id);
    }
    update(id, updateGurdDto) {
        return this.gurdService.update(+id, updateGurdDto);
    }
    remove(id) {
        return this.gurdService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gurd_dto_1.CreateGurdDto]),
    __metadata("design:returntype", void 0)
], GurdController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, role_decorator_1.Role)('admin'),
    (0, swagger_1.ApiOperation)({ summary: "需要权限接口", description: "需要role=admin的GET接口" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "分页描述" }),
    (0, swagger_1.ApiResponse)({ status: 403, description: "小黑子" }),
    __param(0, (0, role_decorator_1.ReqUrl)("3434")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GurdController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: ":id", description: "动态id的GET接口", required: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GurdController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gurd_dto_1.UpdateGurdDto]),
    __metadata("design:returntype", void 0)
], GurdController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GurdController.prototype, "remove", null);
GurdController = __decorate([
    (0, common_1.Controller)('gurd'),
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, swagger_1.ApiTags)("守卫接口"),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [gurd_service_1.GurdService])
], GurdController);
exports.GurdController = GurdController;
//# sourceMappingURL=gurd.controller.js.map