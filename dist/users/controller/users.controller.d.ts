import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';
import { UserInterface } from '../Interface/user.interface';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly service;
    constructor(service: UserService);
    getUsers(): UserInterface[];
    getUser(uuid: string): CreateUserDto | undefined;
    createUser(usuario: CreateUserDto): CreateUserDto;
    updateUser(uuid: number, updateUserDto: UpdateUserDto): "El usuario no existe" | {
        nombre: string;
        apellido: string;
        email: string;
        uuid: number;
    };
    modificarUser(uuid: number, updateUserDto: Partial<UpdateUserDto>): "El usuario no existe" | {
        nombre: string;
        apellido: string;
        email: string;
        uuid: number;
    };
    deleteUser(uuid: number): string;
}
