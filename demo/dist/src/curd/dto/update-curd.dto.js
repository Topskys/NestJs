"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurdDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_curd_dto_1 = require("./create-curd.dto");
class UpdateCurdDto extends (0, swagger_1.PartialType)(create_curd_dto_1.CreateCurdDto) {
}
exports.UpdateCurdDto = UpdateCurdDto;
//# sourceMappingURL=update-curd.dto.js.map