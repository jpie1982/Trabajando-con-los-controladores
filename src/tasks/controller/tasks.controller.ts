import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res, Patch, ParseArrayPipe, ParseIntPipe } from '@nestjs/common';

import { TaskService } from '../services/task.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';


@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TaskService) {}

  @Get() //Recupera datos datos total
  getTasks(): CreateTaskDto[] {
    return this.service.getTasks();
  }
  @Get(':uuid')
  getUser(@Param('uuid') uuid: string ){
    return this.service.getTask(parseInt(uuid))
    //👆convierte el string en un numero para poder comparar con el dato de user.interface 
  }

@Post()
createUser(@Body() task: CreateTaskDto ) {
  console.log (`Usuario fue creado ${task}.`)
  return this.service.createUser(task);
}

@Put(':uuid')
updateUser(@Param('uuid', ParseIntPipe) uuid: number, @Body() updateTaskDto: UpdateTaskDto){
  return this.service.updateUser(uuid, updateTaskDto);
 }

@Patch(':uuid')
modificarUser(@Param('uuid', ParseIntPipe) uuid: number, @Body() updateTaskDto: Partial<UpdateTaskDto>){
return this.service.modificarUser(uuid, updateTaskDto);
} 

//Borrar usuario

@Delete(':uuid')
deleteUser(@Param('uuid') uuid: number){
  return this.service.deleteUser(uuid)
}

}



