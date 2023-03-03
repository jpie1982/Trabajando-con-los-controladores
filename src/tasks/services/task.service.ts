import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TaskService {
  tarea: CreateTaskDto[] = [
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

  //GET
  getTasks(): CreateTaskDto[] {
    return this.tarea;
  }
  //  Retorna solo el usuario deseado
  getTask(uuid: number) {
    return this.tarea.find(user => user.uuid === uuid);
  }


//POST
  createUser(usuario: CreateTaskDto) {
    this.tarea.push(usuario);
    return usuario;
  }



//--------

//Put
updateUser(uuid: number, updateTaskDto: UpdateTaskDto) {
  const userToUpdate = this.tarea.find(tarea => tarea.uuid === uuid);
  if (!userToUpdate) {
    return 'La tarea no existe';
  }
  const updatedUser = { ...userToUpdate, ...updateTaskDto };
  this.tarea = this.tarea.map(tarea => (tarea.uuid === uuid ? updatedUser : tarea));
  return updatedUser;
}

//PATCH
modificarUser(uuid: number, updateTaskDto: Partial<UpdateTaskDto>) {
  const userToUpdate = this.tarea.find((tarea) => tarea.uuid === uuid);
  if (!userToUpdate) {
    return 'La tara no existe';
  }
  const updatedUser = { ...userToUpdate, ...UpdateTaskDto };
  this.tarea = this.tarea.map((tarea) => (tarea.uuid === uuid ? updatedUser : tarea));
  return updatedUser;
}

//DELETE
deleteUser( uuid: number )   {
  this.tarea= this.tarea.filter(id => id.uuid != uuid)
  return `Tarea con uuid: ${uuid},Eliminada.`;
  }


}

  
