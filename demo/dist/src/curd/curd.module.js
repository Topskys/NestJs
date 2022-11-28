"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurdModule = void 0;
const common_1 = require("@nestjs/common");
const curd_service_1 = require("./curd.service");
const curd_controller_1 = require("./curd.controller");
const typeorm_1 = require("@nestjs/typeorm");
const curd_entity_1 = require("./entities/curd.entity");
let CurdModule = class CurdModule {
};
CurdModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([curd_entity_1.Curd])],
        controllers: [curd_controller_1.CurdController],
        providers: [curd_service_1.CurdService]
    })
], CurdModule);
exports.CurdModule = CurdModule;
//# sourceMappingURL=curd.module.js.map