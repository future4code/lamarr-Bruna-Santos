import { CustomError } from "./CustomError";

export class NameInvalid extends CustomError{
    constructor(){
        super(400, "Nome do usuário inválido.")
    }
}
export class EmailInvalid extends CustomError{
    constructor(){
        super(400, "Insira um e-mail válido.")
    }
}
export class PasswordInvalid extends CustomError{
    constructor(){
        super(400, "Cadastre uma senha.")
    }
}

