"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    constructor() {
        this.users = [
            {
                uuid: 1,
                nombre: 'Juan',
                apellido: 'iturbide',
                email: 'jpie1982@gmail.com',
            },
            {
                uuid: 2,
                nombre: 'Maria',
                apellido: 'Perez',
                email: 'mariaperez@gmail.com',
            },
            {
                uuid: 3,
                nombre: 'Pablo',
                apellido: 'Elhordoy',
                email: 'pabloelhordoy@gmail.com',
            },
        ];
    }
    getUsers() {
        return this.users;
    }
    getUser(uuid) {
        return this.users.find(user => user.uuid === uuid);
    }
    createUser(usuario) {
        this.users.push(usuario);
        return usuario;
    }
    updateUser(uuid, updateUserDto) {
        const userToUpdate = this.users.find(user => user.uuid === uuid);
        if (!userToUpdate) {
            return 'El usuario no existe';
        }
        const updatedUser = Object.assign(Object.assign({}, userToUpdate), updateUserDto);
        this.users = this.users.map(user => (user.uuid === uuid ? updatedUser : user));
        return updatedUser;
    }
    modificarUser(uuid, updateUserDto) {
        const userToUpdate = this.users.find((user) => user.uuid === uuid);
        if (!userToUpdate) {
            return 'El usuario no existe';
        }
        const updatedUser = Object.assign(Object.assign({}, userToUpdate), updateUserDto);
        this.users = this.users.map((user) => (user.uuid === uuid ? updatedUser : user));
        return updatedUser;
    }
    deleteUser(uuid) {
        this.users = this.users.filter(id => id.uuid != uuid);
        return `Usuario de uuid: ${uuid},Eliminado.`;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map