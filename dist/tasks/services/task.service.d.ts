import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
export declare class TaskService {
    tarea: CreateTaskDto[];
    getTasks(): CreateTaskDto[];
    getTask(uuid: number): CreateTaskDto | undefined;
    createUser(usuario: CreateTaskDto): CreateTaskDto;
    updateUser(uuid: number, updateTaskDto: UpdateTaskDto): "La tarea no existe" | {
        usuarioUuid: string;
        tarea: string;
        uuid: number;
    };
    modificarUser(uuid: number, updateTaskDto: Partial<UpdateTaskDto>): "La tara no existe" | {
        uuid: number;
        usuarioUuid: string;
        tarea: string;
    };
    deleteUser(uuid: number): string;
}
