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
exports.ContactsController = void 0;
const common_1 = require("@nestjs/common");
const create_contacts_dto_1 = require("../dto/create-contacts.dto");
const contact_service_1 = require("../services/contact.service");
const update_contacts_dto_1 = require("../dto/update-contacts.dto");
let ContactsController = class ContactsController {
    constructor(service) {
        this.service = service;
    }
    getContactos() {
        return this.service.getContactos();
    }
    getContacto(uuid) {
        return this.service.getContacto(parseInt(uuid));
    }
    createContacto(contacto) {
        console.log(`Usuario fue creado ${contacto}.`);
        return this.service.createContacto(contacto);
    }
    updateContacto(uuid, updateContactoDto) {
        return this.service.updateContacto(uuid, updateContactoDto);
    }
    modificarContacto(uuid, updateTaskDto) {
        return this.service.modificarContacto(uuid, updateTaskDto);
    }
    deleteContacto(uuid) {
        return this.service.deleteContacto(uuid);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ContactsController.prototype, "getContactos", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "getContacto", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contacts_dto_1.CreateContactsDto]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "createContacto", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    __param(0, (0, common_1.Param)('uuid', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_contacts_dto_1.UpdateContactsDto]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "updateContacto", null);
__decorate([
    (0, common_1.Patch)(':uuid'),
    __param(0, (0, common_1.Param)('uuid', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "modificarContacto", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ContactsController.prototype, "deleteContacto", null);
ContactsController = __decorate([
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactsController);
exports.ContactsController = ContactsController;
//# sourceMappingURL=contacts.controller.js.map