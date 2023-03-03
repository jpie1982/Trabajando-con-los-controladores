import { TaskService } from '../services/task.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
export declare class TasksController {
    private readonly service;
    constructor(service: TaskService);
    getTasks(): CreateTaskDto[];
    getUser(uuid: string): CreateTaskDto | undefined;
    createUser(task: CreateTaskDto): CreateTaskDto;
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
