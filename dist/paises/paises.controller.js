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
exports.PaisesController = void 0;
const common_1 = require("@nestjs/common");
const paises_service_1 = require("./paises.service");
const create_paise_dto_1 = require("./dto/create-paise.dto");
const update_paise_dto_1 = require("./dto/update-paise.dto");
let PaisesController = class PaisesController {
    constructor(paisesService) {
        this.paisesService = paisesService;
    }
    create(createPaiseDto) {
        return this.paisesService.create(createPaiseDto);
    }
    findAll() {
        return this.paisesService.findAll();
    }
    findOne(id) {
        return this.paisesService.findOne(+id);
    }
    update(id, updatePaiseDto) {
        return this.paisesService.update(+id, updatePaiseDto);
    }
    remove(id) {
        return this.paisesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paise_dto_1.CreatePaiseDto]),
    __metadata("design:returntype", void 0)
], PaisesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaisesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaisesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paise_dto_1.UpdatePaiseDto]),
    __metadata("design:returntype", void 0)
], PaisesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaisesController.prototype, "remove", null);
PaisesController = __decorate([
    (0, common_1.Controller)('paises'),
    __metadata("design:paramtypes", [paises_service_1.PaisesService])
], PaisesController);
exports.PaisesController = PaisesController;
//# sourceMappingURL=paises.controller.js.map