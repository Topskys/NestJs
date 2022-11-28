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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
const typeorm_1 = require("typeorm");
let Guard = class Guard {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Guard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Guard.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], Guard.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Guard.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: true, comment: "注释", default: "成员1，成员2", nullable: true }),
    __metadata("design:type", String)
], Guard.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], Guard.prototype, "names", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-json"),
    __metadata("design:type", Object)
], Guard.prototype, "json", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Guard.prototype, "introduction", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Guard.prototype, "platform", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Guard.prototype, "publish", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ["待审核", "审核中", "完成"], default: "待审核" }),
    __metadata("design:type", String)
], Guard.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Guard.prototype, "createTime", void 0);
Guard = __decorate([
    (0, typeorm_1.Entity)()
], Guard);
exports.Guard = Guard;
//# sourceMappingURL=gurd.entity.js.map