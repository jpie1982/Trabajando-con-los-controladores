import { Module } from '@nestjs/common';

import { ContactsController } from './controller/contacts.controller';
import { ContactService } from './services/contact.service';

@Module({
  controllers: [ContactsController],
  providers: [ContactService],
})
export class ContactsModule {}
