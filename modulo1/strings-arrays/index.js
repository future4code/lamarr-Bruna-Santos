// INTEREPRETAÇÃO DE CÓDIGO
//1

// a) indefinido - não foi determinado um valor para array
// b) retornou null, pois foi o valor determinado para array
// c) retornou 11, o tamanho do array
// d) retornou o 3, pois é o elemento que está na posição 0 
// e) o elemento 4 que está na posição 1 (0+1) foi substituido pelo elemento 19
// f) retornou 9 pois é o elemento que está na posição 6 (0+6)

//2
// SUBI NUM ÔNIBUS EM MIRROCOS / 23

// EXERCICIOS DE ESCRITAS DE CÓDIGO
// 1 - e-mail

let nome = prompt("Qual o seu nome?")
let email = prompt("Qual seu e-mail?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda (o), ${nome}`)

// 2 - ARRAY
let comidas = ["pizza", "hamburguer", "coxinha", "peixe", "macarrão"]
console.log(comidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(comidas [0])
console.log(comidas [1])
console.log(comidas [2])
console.log(comidas [3])
console.log(comidas [4])

let comidaUsuario = prompt("Qual a sua comida favorita?")
comidas [1] = comidaUsuario
console.log(comidas)


// 3 
let listaDeTarefas = [null]
let tarefaUsuario1 = prompt("Insira sua primeira tarefa do dia")
let tarefaUsuario2 = prompt("Insira sua segunda tarefa do dia")
let tarefaUsuario3 = prompt("Insira sua última tarefa do dia")

listaDeTarefas = [tarefaUsuario1, tarefaUsuario2, tarefaUsuario3]
console.log(listaDeTarefas)

let tarefaRealizada = prompt("Digite qual tarefa já foi realizada, sendo 0 para a primeira, 1 para a segunda e 2 para a terceira")
let numeroEscolhido = Number(tarefaRealizada)
listaDeTarefas.splice(numeroEscolhido, 1)

console.log(listaDeTarefas)


//DESAFIO
// 1
let frase = prompt("Digite uma frase")
let array = frase.split(" ")
console.log(array)

// 2 

let arrayFruta = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indice = arrayFruta.indexOf("Abacaxi")

console.log(indice)
console.log(arrayFruta[indice].length)














