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
exports.CurdService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const curd_entity_1 = require("./entities/curd.entity");
const typeorm_2 = require("@nestjs/typeorm");
let CurdService = class CurdService {
    constructor(curd) {
        this.curd = curd;
    }
    create(createCurdDto) {
        const obj = new curd_entity_1.Curd();
        obj.name = createCurdDto.name;
        obj.desc = createCurdDto.desc;
        return this.curd.save(obj);
    }
    async findAll(query) {
        const data = await this.curd.find({
            where: {
                name: (0, typeorm_1.Like)(`%${query.keyWord}%`)
            },
            order: {
                id: "DESC"
            },
            skip: (query.page - 1) * query.pageSize,
            take: query.pageSize,
        });
        const total = await this.curd.count({
            where: {
                name: (0, typeorm_1.Like)(`%${query.keyWord}%`)
            },
        });
        return {
            data,
            total
        };
    }
    findOne(id) {
        return `This action returns a #${id} curd`;
    }
    update(id, updateCurdDto) {
        return this.curd.update(id, updateCurdDto);
    }
    remove(id) {
        return this.curd.delete(id);
    }
};
CurdService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(curd_entity_1.Curd)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CurdService);
exports.CurdService = CurdService;
//# sourceMappingURL=curd.service.js.map