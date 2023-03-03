import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';

import { CreateContactsDto } from '../dto/create-contacts.dto';
import { ContactService } from '../services/contact.service';
import { UpdateContactsDto } from '../dto/update-contacts.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly service: ContactService) {}

  @Get() //Recupera datos datos total
  getContactos(): CreateContactsDto[] {
    return this.service.getContactos();
  }
  @Get(':uuid')
  getContacto(@Param('uuid') uuid: string ){
    return this.service.getContacto(parseInt(uuid))
    //👆convierte el string en un numero para poder comparar con el dato de user.interface 
  }

@Post()
createContacto(@Body() contacto: CreateContactsDto ) {
  console.log (`Usuario fue creado ${contacto}.`)
  return this.service.createContacto(contacto);
}

@Put(':uuid')
updateContacto(@Param('uuid', ParseIntPipe) uuid: number, @Body() updateContactoDto: UpdateContactsDto){
  return this.service.updateContacto(uuid, updateContactoDto);
 }

@Patch(':uuid')
modificarContacto(@Param('uuid', ParseIntPipe) uuid: number, @Body() updateTaskDto: Partial<UpdateContactsDto>){
return this.service.modificarContacto(uuid, updateTaskDto);
} 

//Borrar usuario

@Delete(':uuid')
deleteContacto(@Param('uuid') uuid: number){
  return this.service.deleteContacto(uuid)
}

 
}