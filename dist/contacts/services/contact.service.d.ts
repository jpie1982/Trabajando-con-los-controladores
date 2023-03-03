import { CreateContactsDto } from '../dto/create-contacts.dto';
import { UpdateContactsDto } from '../dto/update-contacts.dto';
export declare class ContactService {
    contacto: CreateContactsDto[];
    getContactos(): CreateContactsDto[];
    getContacto(uuid: number): CreateContactsDto | undefined;
    createContacto(contacto: CreateContactsDto): CreateContactsDto;
    updateContacto(uuid: number, updateContactoDto: UpdateContactsDto): "La tarea no existe" | {
        usuarioUuid: string;
        nombre: string;
        apellido: string;
        teléfono: string;
        correo: string;
        uuid: number;
    };
    modificarContacto(uuid: number, UpdateContactsDto: Partial<UpdateContactsDto>): "La tara no existe" | {
        usuarioUuid: string;
        nombre: string;
        apellido: string;
        teléfono: string;
        correo: string;
        uuid: number;
    };
    deleteContacto(uuid: number): string;
}
