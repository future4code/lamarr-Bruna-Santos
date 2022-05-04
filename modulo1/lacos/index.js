// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1: O resultado é 10. Ele vai repetir o bloco de códigos enquanto a condição for satisfeita (i < 5), ou seja até o número 4. 
// o += significa que o i será somado ao valor (0+1; 1+2; 3+3; 6+4 = 10), resultado em 10.

// 2: todos os números maiores que 18: 19, 21, 23, 25, 27, 30
// Sim, bastaria inserir um console.log(lista.indexOf (numero)) no for.

// 3. Ele vai adicionar um * para cada linha enquanto a condição for satisfeita:
// *
// **
// ***
/// ****

// EXERCICIO DE ESCRITA DE CÓDIGO.
// 1:

 let bichinhos = Number (prompt("Quantos bichinhos de estimação você tem?"))

    if (bichinhos === 0) {
        console.log("Que pena, você pode adotar um pet")
    } else if (bichinhos > 0) {
        let array = []
        for (let i = 0; i < bichinhos; i++) {
            array.push(prompt("Digite o nome do seu bichinho"))
        }

        console.log(array)
    }

// 2:
// a)
let arrayOriginal = [10, 25, 30, 40, 57, 60, 71, 80]
function imprimeElementosArray () {
    for (let numero of arrayOriginal){
        console.log(numero)
    }
}

//b)
function divisaoElementosArray () {
    for (let numero of arrayOriginal) {
        console.log(numero/10)
    }
}
divisaoElementosArray()

//c)
function numerosParesArray () {
    let array = []
    for (let numero of arrayOriginal) {
        if (numero % 2 === 0) {
            array.push(numero)
        } 
    }
    console.log(array)
}
numerosParesArray()

// d)
function arrayComStrings (){
    let array = []
    for (let numero of arrayOriginal) {
        array.push(`O elemento do index ${arrayOriginal.indexOf(numero)} é ${numero}`)
    }
    console.log(array)
}
arrayComStrings()

// e)
function valorMinimoMaximo (){
    let valorMaximo = -9999999 
    let valorMinimo = 999999
   for (let numero of arrayOriginal){
       if (numero > valorMaximo) {
           valorMaximo = numero
       } 
       if (numero < valorMinimo) {
           valorMinimo = numero
       }
   }  
   console.log(`O maior valor é o ${valorMaximo} e o menor é ${valorMinimo}`)
}
valorMinimoMaximo()

// DESAFIOS

// 1.

 let primeiroJogador = Number (prompt("Escolha um número"))
console.log("Vamos jogar!")
let segundoJogador
let contador = 0
while (segundoJogador !== primeiroJogador) {
    segundoJogador = Number(prompt("Chute qual número o primeiro jogador escolheu"))

    console.log(`O número chutado foi: ${segundoJogador}`)
    if (segundoJogador > primeiroJogador){
        console.log("Errou. O número escolhido é menor.")
    } else if (segundoJogador < primeiroJogador){
        console.log("Errou. O número escolhido é maior")
    } else {
        console.log("Acertou")
    } 
    contador ++ 
}
console.log(contador)  

// 2.

console.log("Vamos jogar!")
let computador =  Math.floor(Math.random() * (100 - 1) + 1);
console.log(computador)

let jogador
   let contadorDois = 0
while (computador !== jogador) {
    jogador = Number(prompt("Chute qual número o jogador escolheu"))

    console.log(`O número chutado foi: ${jogador}`)
    if (computador < jogador){
        console.log("Errou. O número escolhido é menor.")
    } else if (computador > jogador){
        console.log("Errou. O número escolhido é maior")
    } else {
        console.log("Acertou")
    } 
    contadorDois ++ 
}
console.log(contadorDois) 

// Com o auxilio do material fornecido para já saber como fazer o sorteio do número aleatório ficou bem mais facil;
// não consegui entender muuito bem pelo documento que foi deixado, mas utilizei o nome do comando para ver videos no youtube, após aprender como sortear o número
// precisei apenas inserir no código. 

