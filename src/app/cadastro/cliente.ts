import { v4 as uuid } from 'uuid';

export class Cliente {
    id?: string;
    nome?: string;
    cpf?: string;
    email?: string;
    nascimento?: string;

    static newCliente(){
        const cliente = new Cliente();
        cliente.id = uuid();
        return cliente;
    }
}