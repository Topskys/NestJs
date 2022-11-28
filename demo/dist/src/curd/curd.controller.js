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
exports.CurdController = void 0;
const common_1 = require("@nestjs/common");
const curd_service_1 = require("./curd.service");
const create_curd_dto_1 = require("./dto/create-curd.dto");
const update_curd_dto_1 = require("./dto/update-curd.dto");
let CurdController = class CurdController {
    constructor(curdService) {
        this.curdService = curdService;
    }
    create(createCurdDto) {
        return this.curdService.create(createCurdDto);
    }
    findAll(query) {
        return this.curdService.findAll(query);
    }
    findOne(id) {
        return this.curdService.findOne(+id);
    }
    update(id, updateCurdDto) {
        return this.curdService.update(+id, updateCurdDto);
    }
    remove(id) {
        return this.curdService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_curd_dto_1.CreateCurdDto]),
    __metadata("design:returntype", void 0)
], CurdController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CurdController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CurdController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_curd_dto_1.UpdateCurdDto]),
    __metadata("design:returntype", void 0)
], CurdController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CurdController.prototype, "remove", null);
CurdController = __decorate([
    (0, common_1.Controller)('curd'),
    __metadata("design:paramtypes", [curd_service_1.CurdService])
], CurdController);
exports.CurdController = CurdController;
//# sourceMappingURL=curd.controller.js.map