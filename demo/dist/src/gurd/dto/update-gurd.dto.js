"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGurdDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_gurd_dto_1 = require("./create-gurd.dto");
class UpdateGurdDto extends (0, mapped_types_1.PartialType)(create_gurd_dto_1.CreateGurdDto) {
}
exports.UpdateGurdDto = UpdateGurdDto;
//# sourceMappingURL=update-gurd.dto.js.map