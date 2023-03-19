"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePaiseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_paise_dto_1 = require("./create-paise.dto");
class UpdatePaiseDto extends (0, mapped_types_1.PartialType)(create_paise_dto_1.CreatePaiseDto) {
}
exports.UpdatePaiseDto = UpdatePaiseDto;
//# sourceMappingURL=update-paise.dto.js.map