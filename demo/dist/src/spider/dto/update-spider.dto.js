"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpiderDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_spider_dto_1 = require("./create-spider.dto");
class UpdateSpiderDto extends (0, mapped_types_1.PartialType)(create_spider_dto_1.CreateSpiderDto) {
}
exports.UpdateSpiderDto = UpdateSpiderDto;
//# sourceMappingURL=update-spider.dto.js.map