import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UserService {
    users: CreateUserDto[];
    getUsers(): CreateUserDto[];
    getUser(uuid: number): CreateUserDto | undefined;
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
