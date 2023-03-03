"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./main/app.controller");
const app_service_1 = require("./main/app.service");
const users_module_1 = require("./users/users.module");
const tasks_module_1 = require("./tasks/tasks.module");
const contacts_module_1 = require("./contacts/contacts.module");
const tasks_controller_1 = require("./tasks/controller/tasks.controller");
const contacts_controller_1 = require("./contacts/controller/contacts.controller");
const users_controller_1 = require("./users/controller/users.controller");
const user_service_1 = require("./users/services/user.service");
const contact_service_1 = require("./contacts/services/contact.service");
const task_service_1 = require("./tasks/services/task.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            app_controller_1.AppController,
            tasks_controller_1.TasksController,
            contacts_controller_1.ContactsController,
            users_controller_1.UsersController,
        ],
        providers: [app_service_1.AppService, user_service_1.UserService, contact_service_1.ContactService, task_service_1.TaskService],
        imports: [users_module_1.UserModule, tasks_module_1.TasksModule, contacts_module_1.ContactsModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map