"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const update_task_dto_1 = require("../dto/update-task.dto");
let TaskService = class TaskService {
    constructor() {
        this.tarea = [
            {
                uuid: 1,
                usuarioUuid: 'Juan',
                tarea: 'Profesor Informatica.'
            },
            {
                uuid: 2,
                usuarioUuid: 'Maria',
                tarea: 'Profesor Contable.'
            },
            {
                uuid: 3,
                usuarioUuid: 'Pablo',
                tarea: 'Profesor Ciencias'
            },
        ];
    }
    getTasks() {
        return this.tarea;
    }
    getTask(uuid) {
        return this.tarea.find(user => user.uuid === uuid);
    }
    createUser(usuario) {
        this.tarea.push(usuario);
        return usuario;
    }
    updateUser(uuid, updateTaskDto) {
        const userToUpdate = this.tarea.find(tarea => tarea.uuid === uuid);
        if (!userToUpdate) {
            return 'La tarea no existe';
        }
        const updatedUser = Object.assign(Object.assign({}, userToUpdate), updateTaskDto);
        this.tarea = this.tarea.map(tarea => (tarea.uuid === uuid ? updatedUser : tarea));
        return updatedUser;
    }
    modificarUser(uuid, updateTaskDto) {
        const userToUpdate = this.tarea.find((tarea) => tarea.uuid === uuid);
        if (!userToUpdate) {
            return 'La tara no existe';
        }
        const updatedUser = Object.assign(Object.assign({}, userToUpdate), update_task_dto_1.UpdateTaskDto);
        this.tarea = this.tarea.map((tarea) => (tarea.uuid === uuid ? updatedUser : tarea));
        return updatedUser;
    }
    deleteUser(uuid) {
        this.tarea = this.tarea.filter(id => id.uuid != uuid);
        return `Tarea con uuid: ${uuid},Eliminada.`;
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map