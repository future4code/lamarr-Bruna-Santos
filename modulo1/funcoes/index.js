// INTERPRETAÇÃO DE CÓDIGO

// 1: 10 e 50
// não iria aparecer nada, pois não foi informado o comando para imprimir.

//2:
//a) o toLowerCase() deixa o texto todo em minusculo, já o includes vai verificar se o texto inserido pelo usuário contém a palavra cenoura, e vai retornar true se tiver e false se não tiver.
//b) true, true, true.

// EXERCICIO DE ESCRITA DE CÓDIGO
// Exercicio 1:

function apresentacao (){
    console.log("Eu sou Bruna, tenho 24 anos, moro em Curitiba e sou estudante")
}
apresentacao()

function apresentacaoDois (nome, idade, cidade, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou ${profissao}`)
}
apresentacaoDois("Bruna", 24, "Curitiba", "Analista")


// Exercicio de escrita de código
// A
function soma (n1,n2){
    return n1+n2
}
console.log(soma(20,30))

// B
function numero (a,b){
    
    return a >= b 
}
console.log(numero(20,30))


// C
function numeroParOuImpar (c){
    return c % 2 === 0
}
console.log(numeroParOuImpar(20))


// D
function mensagem (string){
    return [string.length, string.toUpperCase()]
}
console.log(mensagem("o dia ta lindo, clima ensolarado"))

// 3
function operacao (numero1,numero2) {
    return [numero1, numero2, numero1+numero2, numero1-numero2, numero1*numero2, numero1/numero2] 
}
let resultados=operacao(10,10)
console.log(`Números inseridos: ${resultados[0]} e ${resultados[1]}`)
console.log(`Soma: ${resultados[2]}`)
console.log(`Diferença: ${resultados[3]}`)
console.log(`Multiplicação: ${resultados[4]}`)
console.log(`Divisão: ${resultados[5]}`)

// DESAFIOS

// 1 
const imprimir= nome => {
    console.log(nome)
}

//b

const somaDesafio=(n1, n2) =>{
    imprimir (n1+n2)
}
somaDesafio(20,23)

//2 Pitágoras

function pitagoras(cateto1, cateto2){

    return Math.sqrt((cateto1*cateto1) + (cateto2*cateto2))
}
console.log(pitagoras(70,90))
