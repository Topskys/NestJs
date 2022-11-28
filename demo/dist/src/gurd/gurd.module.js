"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GurdModule = void 0;
const common_1 = require("@nestjs/common");
const gurd_service_1 = require("./gurd.service");
const gurd_controller_1 = require("./gurd.controller");
const typeorm_1 = require("@nestjs/typeorm");
const gurd_entity_1 = require("./entities/gurd.entity");
let GurdModule = class GurdModule {
};
GurdModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([gurd_entity_1.Guard])],
        controllers: [gurd_controller_1.GurdController],
        providers: [gurd_service_1.GurdService]
    })
], GurdModule);
exports.GurdModule = GurdModule;
//# sourceMappingURL=gurd.module.js.map