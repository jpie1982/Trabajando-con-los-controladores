import { CreateContactsDto } from '../dto/create-contacts.dto';
import { ContactService } from '../services/contact.service';
import { UpdateContactsDto } from '../dto/update-contacts.dto';
export declare class ContactsController {
    private readonly service;
    constructor(service: ContactService);
    getContactos(): CreateContactsDto[];
    getContacto(uuid: string): CreateContactsDto | undefined;
    createContacto(contacto: CreateContactsDto): CreateContactsDto;
    updateContacto(uuid: number, updateContactoDto: UpdateContactsDto): "La tarea no existe" | {
        usuarioUuid: string;
        nombre: string;
        apellido: string;
        teléfono: string;
        correo: string;
        uuid: number;
    };
    modificarContacto(uuid: number, updateTaskDto: Partial<UpdateContactsDto>): "La tara no existe" | {
        usuarioUuid: string;
        nombre: string;
        apellido: string;
        teléfono: string;
        correo: string;
        uuid: number;
    };
    deleteContacto(uuid: number): string;
}
