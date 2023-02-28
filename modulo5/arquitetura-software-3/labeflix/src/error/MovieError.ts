import { CustomError } from "./CustomError";

export class TitleInvalid extends CustomError{
    constructor(){
        super(400, "Titulo do filme inválido.")
    }
}
export class DescriptionInvalid extends CustomError{
    constructor(){
        super(400, "Descrição do filme inválido.")
    }
}
export class DurationInvalid extends CustomError{
    constructor(){
        super(400, "Insira a duração do filme em minutos")
    }
}

export class YearInvalid extends CustomError{
    constructor(){
        super(400, "Insira o ano de lança do filme")
    }
}
