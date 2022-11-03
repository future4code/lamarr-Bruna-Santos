//var minhaString:string = 10
// não é permitido inserir um número pois sua tipagem é string.

var meuNumero:number = 10
// aqui aceita apenas números

var meuNumeroDois: number | string = "Olá, mundo"
// aceita numeros ou string.

//C:

enum CoresArcoIris{
    VERMELHO="vermelho",
    LARANJA="laranja",
    AMARELO="amarelo",
    VERDE="verde",
    AZUL="azul",
    AZUL_ESCURO = "azulEscuro",
    VIOLETA="violeta"
}

type Person={
    nome: string,
    idade: Number,
    corFavorita:CoresArcoIris,
}

const Pessoa:Person={
    nome:"Bruna",
    idade: 24,
    corFavorita: CoresArcoIris.AZUL

}

const Pessoa1:Person={
    nome:"Raphael",
    idade: 25,
    corFavorita: CoresArcoIris.AMARELO
}

const Pessoa2:Person={
    nome:"Claudinha",
    idade: 45,
    corFavorita: CoresArcoIris.LARANJA
}

console.table(Pessoa)

