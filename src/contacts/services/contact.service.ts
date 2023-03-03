import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { UpdateTaskDto } from 'src/tasks/dto/update-task.dto';
import { CreateContactsDto } from '../dto/create-contacts.dto';
import { UpdateContactsDto } from '../dto/update-contacts.dto';


export class ContactService {
  contacto: CreateContactsDto[] = [
    {
      uuid: 1,
      usuarioUuid: 'u01',
      nombre: 'Juan',
      apellido: 'Iturbide',
      teléfono:'099073927', 
      correo: 'jpie1982@gmail.com'
    },
    {
      uuid: 2,
      usuarioUuid: 'u02',
      nombre: 'Maria',
      apellido: 'Perez',
      teléfono:'099073972', 
      correo: 'mepepe1984@gmail.com'
    },
    {
      uuid: 3,
      usuarioUuid: 'u03',
      nombre: 'Pablo',
      apellido: 'Elhordoy',
      teléfono:'099073279', 
      correo: 'pe1982@gmail.com'
    },
  ];

  //GET
  getContactos(): CreateContactsDto[] {
    return this.contacto;
  }
  //  Retorna solo el usuario deseado
  getContacto(uuid: number) {
    return this.contacto.find(user => user.uuid === uuid);
  }


//POST
  createContacto(contacto: CreateContactsDto) {
    this.contacto.push(contacto);
    return contacto;
  }



//--------
 
//Put
updateContacto(uuid: number, updateContactoDto: UpdateContactsDto) {
  const contactoToUpdate = this.contacto.find(tarea => tarea.uuid === uuid);
  if (!contactoToUpdate) {
    return 'La tarea no existe';
  }
  const updatedcontacto = { ...contactoToUpdate, ...updateContactoDto };
  this.contacto = this.contacto.map(contacto => (contacto.uuid === uuid ? updatedcontacto : contacto));
  return updatedcontacto
 }
//PATCH
modificarContacto(uuid: number, UpdateContactsDto: Partial<UpdateContactsDto>) {
  const contactoToUpdate = this.contacto.find((contacto) => contacto.uuid === uuid);
  if (!contactoToUpdate) {
    return 'La tara no existe';
  }
  const updatedUser = { ...contactoToUpdate, ...UpdateContactsDto };
  this.contacto = this.contacto.map((contacto) => (contacto.uuid === uuid ? updatedUser : contacto));
  return updatedUser;
}

//DELETE
deleteContacto( uuid: number )   {
  this.contacto= this.contacto.filter(id => id.uuid != uuid)
  return `Tarea con uuid: ${uuid},Eliminada.`;
  }


}

  

