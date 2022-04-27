// EXERCICIO INTERPRETAÇÃO DE CÓDIGO

//1:
// A) Matheus Nachtergaele // Virginia Cavendish // Canal: Globo, horario: 14h

// 2:
// a) Nome: Juca, idade: 3, raca: SRD 
//    Nome: Juba, idade: 3, raca: SRD
//    Nome: Jubo, idade: 3, raca: SRD  

// b) realiza o espelhamento do objeto.

// 3:
// a) false // indefinido 
// b) False: Ele imprimiu a resposta dentro do objeto para o backender
//    Indefinido: Não foi determinado um valor para altura dentro do objeto.

// EXERCICIO DE ESCRITA DE CÓDIGO
// 1 a:

const pessoa = {
    nome: "Bruna",
    apelidos: ["Buna", "Bru", "Brubs"]
}
console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

//b:

const novoApelido = {
    ... pessoa, apelidos: ["Bruninha", "Bruzinha", "Bruzi"]
}
console.log(`Eu sou a ${novoApelido.nome}, mas pode me chamar de ${novoApelido.apelidos}`)

// 2:
// a)

const profissao = {
    nome: "Raphael",
    idade: 25,
    profissão: "Facilitador"
}

const profissaoDois = {
    nome: "Bruna",
    idade: 24,
    profissão: "Analista"
}

console.log([profissao.nome, profissaoDois.nome])
console.log([profissao.nome.length, profissaoDois.nome.length])
console.log([profissao.idade, profissaoDois.idade])
console.log([profissao.profissão.length, profissaoDois.profissão.length])

// 3:
// a)

let carrinho = []

const abacaxi = {
    nome: "Abacaxi",
    disponibilidade: true
}

const melancia = {
    nome: "Melancia",
    disponibilidade: true
}

const morango = {
    nome: "Morango",
    disponibilidade: true
}

// b)
function adicionarCarrinho (frutas) {
    carrinho.push(frutas)
}

// c)
adicionarCarrinho(abacaxi)
adicionarCarrinho(melancia)
adicionarCarrinho(morango)

// d)
console.log(carrinho)

// DESAFIO
// 1:

const usuario = {
    nome: prompt("Qual seu nome?"),
    idade: prompt("Qual sua idade?"),
    profissao: prompt("Qual sua profissão?")

}
console.log(usuario)
console.log(typeof usuario)

// 2:

const filme = {
    anoDeLancamento: 2004,
    nome: "Efeito borboleta"

}

const segundoFilme = {
    anoDeLancamento:2002,
    nome: "Senhor dos aneis"
}

function comparacao (filme1, filme2) {
    let primeiroFilme = filme1.anoDeLancamento < filme2.anoDeLancamento
    let anoLancamento = filme1.anoDeLancamento === filme2.anoDeLancamento
    console.log (`O primeiro filme foi lançado antes do segundo? ${primeiroFilme}`)
    console.log (`O primeiro filme foi lançado no mesmo ano do segundo? ${anoLancamento}`)
}

comparacao(filme, segundoFilme)

// 3:
function estoque (umaDasFrutas) {
    umaDasFrutas.disponibilidade=!umaDasFrutas.disponibilidade
    return umaDasFrutas
}
console.log(estoque(melancia))
