import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
@Injectable()
export class UserService {
   users: CreateUserDto[] = [
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


  //GET
  //  Retorna todos los usuarios
  getUsers(): CreateUserDto[] {
    return this.users;
  }


  //  Retorna solo el usuario deseado
  getUser(uuid: number) {
    return this.users.find(user => user.uuid === uuid);
  }


//POST
  createUser(usuario: CreateUserDto) {
    this.users.push(usuario);
    return usuario;
  }



//--------

//Put
updateUser(uuid: number, updateUserDto: UpdateUserDto) {
  const userToUpdate = this.users.find(user => user.uuid === uuid);
  if (!userToUpdate) {
    return 'El usuario no existe';
  }
  const updatedUser = { ...userToUpdate, ...updateUserDto };
  this.users = this.users.map(user => (user.uuid === uuid ? updatedUser : user));
  return updatedUser;
}

//PATCH
modificarUser(uuid: number, updateUserDto: Partial<UpdateUserDto>) {
  const userToUpdate = this.users.find((user) => user.uuid === uuid);
  if (!userToUpdate) {
    return 'El usuario no existe';
  }
  const updatedUser = { ...userToUpdate, ...updateUserDto };
  this.users = this.users.map((user) => (user.uuid === uuid ? updatedUser : user));
  return updatedUser;
}

//DELETE
deleteUser( uuid: number )   {
  this.users = this.users.filter(id => id.uuid != uuid)
  return `Usuario de uuid: ${uuid},Eliminado.`;
  }
  
}
