"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
class ContactService {
    constructor() {
        this.contacto = [
            {
                uuid: 1,
                usuarioUuid: 'u01',
                nombre: 'Juan',
                apellido: 'Iturbide',
                teléfono: '099073927',
                correo: 'jpie1982@gmail.com'
            },
            {
                uuid: 2,
                usuarioUuid: 'u02',
                nombre: 'Maria',
                apellido: 'Perez',
                teléfono: '099073972',
                correo: 'mepepe1984@gmail.com'
            },
            {
                uuid: 3,
                usuarioUuid: 'u03',
                nombre: 'Pablo',
                apellido: 'Elhordoy',
                teléfono: '099073279',
                correo: 'pe1982@gmail.com'
            },
        ];
    }
    getContactos() {
        return this.contacto;
    }
    getContacto(uuid) {
        return this.contacto.find(user => user.uuid === uuid);
    }
    createContacto(contacto) {
        this.contacto.push(contacto);
        return contacto;
    }
    updateContacto(uuid, updateContactoDto) {
        const contactoToUpdate = this.contacto.find(tarea => tarea.uuid === uuid);
        if (!contactoToUpdate) {
            return 'La tarea no existe';
        }
        const updatedcontacto = Object.assign(Object.assign({}, contactoToUpdate), updateContactoDto);
        this.contacto = this.contacto.map(contacto => (contacto.uuid === uuid ? updatedcontacto : contacto));
        return updatedcontacto;
    }
    modificarContacto(uuid, UpdateContactsDto) {
        const contactoToUpdate = this.contacto.find((contacto) => contacto.uuid === uuid);
        if (!contactoToUpdate) {
            return 'La tara no existe';
        }
        const updatedUser = Object.assign(Object.assign({}, contactoToUpdate), UpdateContactsDto);
        this.contacto = this.contacto.map((contacto) => (contacto.uuid === uuid ? updatedUser : contacto));
        return updatedUser;
    }
    deleteContacto(uuid) {
        this.contacto = this.contacto.filter(id => id.uuid != uuid);
        return `Tarea con uuid: ${uuid},Eliminada.`;
    }
}
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map