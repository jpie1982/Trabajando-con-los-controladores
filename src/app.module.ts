import { Module } from '@nestjs/common';
import { AppController } from './main/app.controller';
import { AppService } from './main/app.service';
import { UserModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { ContactsModule } from './contacts/contacts.module';
import { TasksController } from './tasks/controller/tasks.controller';
import { ContactsController } from './contacts/controller/contacts.controller';
import { UsersController } from './users/controller/users.controller';
import { UserService } from './users/services/user.service';
import { ContactService } from './contacts/services/contact.service';
import { TaskService } from './tasks/services/task.service';

@Module({
  controllers: [
    AppController,
    TasksController,
    ContactsController,
    UsersController,
  ],
  providers: [AppService, UserService, ContactService, TaskService],
  imports: [UserModule, TasksModule, ContactsModule],
})
export class AppModule {}
