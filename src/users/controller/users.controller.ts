import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res, Patch, ParseArrayPipe, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import { UserInterface } from '../Interface/user.interface';
import { UpdateUserDto } from '../dto/update-user.dto';


@Controller('user')
export class UsersController {
  constructor(private readonly service: UserService) {}
  
  @Get() //Recupera datos datos total
  getUsers(): UserInterface[] {
    return this.service.getUsers();
  }
  @Get(':uuid')
  getUser(@Param('uuid') uuid: string ){
    return this.service.getUser(parseInt(uuid))
    //👆convierte el string en un numero para poder comparar con el dato de user.interface 
  }

@Post()
createUser(@Body() usuario: CreateUserDto ) {
  console.log (`Usuario fue creado ${usuario}.`)
  return this.service.createUser(usuario);
}

@Put(':uuid')
updateUser(@Param('uuid', ParseIntPipe) uuid: number, @Body() updateUserDto: UpdateUserDto){
  return this.service.updateUser(uuid, updateUserDto);
 }
/////


@Patch(':uuid')
modificarUser(@Param('uuid', ParseIntPipe) uuid: number, @Body() updateUserDto: Partial<UpdateUserDto>){
return this.service.modificarUser(uuid, updateUserDto);
}

//Borrar usuario

@Delete(':uuid')
deleteUser(@Param('uuid') uuid: number){
  return this.service.deleteUser(uuid)
}

}


  //////////////////////////////


/* DATOS QUE HAY QUE HACER.-

GET /user | Debe devolver un arreglo con el listado de usuarios (uuid*, nombre*, apellido, email*); deben haber por lo menos 3 usuarios.
GET /user/:uuid | Debe devolver un usuario con sus datos (uuid*, nombre*, apellido, email*)
POST /user (nombre*, apellido, email*) | Debe devolver el usuario creado (uuid*, nombre*, apellido, email*)
PUT /user/:uuid (nombre*, apellido, email*) | Debe devolver el usuario modificado (uuid*, nombre*, apellido, email*)
PATCH /user/:uuid (nombre, apellido, email) | Debe de devolver el usuario modificado (uuid*, nombre*, apellido, email*)
DELETE /user/:uuid | Debe devolver true sí el usuario existe y fue borrado

*/

