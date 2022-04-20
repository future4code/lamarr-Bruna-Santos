
// INTERPRETAÇÃO exercicio 1

// const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2
//console.log(resultado)

//resultado = bool1 && bool2 && bool3
//console.log (resultado)

//resultado = !resultado && (bool1 || bool2)
//console.log(resultado)

//console.log(typeof resultado)

// INTERPRETAÇÃO exercicio 2 

//let primeiroNumero = prompt ("Digite um numero!")
//let segundoNumero = prompt ("Digite outro numero!")

//console.log(Number (primeiroNumero) + Number (segundoNumero))
//Insira o comando Number antes de cada variavel

// ESCRITA DE CÓDIGO
// EXERCICIO 1:

let idade = prompt ("Digite sua idade")
let idadeAmigo = prompt ("Qual a idade do seu melhor amigo?")
let  idadeMaior= idade > idadeAmigo

console.log("Sua idade é maior do que do seu melhor amigo?", idadeMaior)

let diferenca = idade - idadeAmigo
console.log(Number (diferenca)) 

// EXERCICIO 2:

 let numeroPar = prompt ("Insira um número par")
 console.log (Number (numeroPar) % 2)

// Sempre que o usuário insere um número par o resultado é 0
// Sempre que o usuário inserre um número impar o resultado é 1

// EXERCICIO 3:

 let idade1 = prompt ("Digite sua idade")
 idadeMeses = idade1 * 12
 idadeDias = idade1 * 365
 idadeHoras = idadeDias * 24

 console.log  (Number (idadeMeses))
 console.log (Number (idadeDias))
 console.log( Number (idadeHoras))
// Para calcular com o ano bissexto a multiplicação de idadeDias deveria ser de 365,25 porque a cada 4 anos tem 1 dia a mais // 


 //EXERCICIO 4:
let numero1 = prompt ("Insira um número")
let numero2 = prompt ("Insira outro número")

console.log(`O primeiro numero é maior que o segundo?, ${Number(numero1) > Number(numero2)}`)
console.log("O primeiro numero é igual ao segundo?", (numero1) === (numero2)) 
console.log("O primeiro numero é divisivel ao segundo?", (numero1) % (numero2) === 0)
console.log("O segundo numero é divisivel ao primeiro?", (numero2) % (numero1) === 0) 

// DESAFIO

// EXERCICIO 1:
// A

 let temperaturaF = 77
let temperaturaKF = (temperaturaF - 32) * (5/9) + 273.15
console.log(temperaturaKF)

// B
let temperaturaC = 80
let temperaturaCF = (temperaturaC) * (9/5) + 32
console.log(temperaturaCF)

// C

temperaturaC = 30
temperaturaCF = (temperaturaC) * (9/5) + 32
console.log(temperaturaCF)

temperaturaFK = (temperaturaCF - 32) * (5/9) + 273.15
console.log(temperaturaFK)

// D
let temperaturaCelsius = prompt("Insira uma temperatura")
temperaturaCF = (temperaturaCelsius) * (9/5) + 32
console.log("A temperatura em Fahrenheit é", (temperaturaCF))

temperaturaFK = (temperaturaCF - 32) * (5/9) + 273.15
console.log("A temperatura em Kelvin é", (temperaturaFK))

// EXERCICIO 2:

let quilowattHora = 0.05
let pagamentoResidencia = (quilowattHora) * 280
console.log(pagamentoResidencia)

let pagamentoDesconto = (pagamentoResidencia) - ((pagamentoResidencia) * 0.15)
console.log(pagamentoDesconto)

// EXERCICIO 3:
// A

let umaLibra = 0.453592
let libraKg = (umaLibra) * 20
console.log("20lb equivalem a", libraKg, "kg")

// B
let umaOz = 0.0283495
let ozKg = (umaOz) * 10.5
console.log("10.5oz equivalem a", ozKg, "kg")

// C
let umaMilha = 1609.34
let milhaMetro = umaMilha * 100
console.log("100mi equivalem a", milhaMetro, "m")

// D
let umPes = 0.3048
let pesMetro = umPes * 50
console.log("50ft equivalem a", pesMetro, "m")

// G
//pesMetro = prompt("Insira um valor para converter de pes para metro")
// let valorFinal = umPes * Number (pesMetro)
// console.log(pesMetro, "pes, equivalem a", valorFinal, "metros")

// E
 let umGalao = 3.78541
let galaoLitro = umGalao * 103.56
console.log("103.56gal equivalem a", galaoLitro, "l")

// F
let umaXic = 0.284131
let xicLitro = umaXic * 450
console.log("450 xic equivalem a", xicLitro, "l")

// EXERCICIO G ESTÁ COMO COMENTÁRIO JUNTO COM O EXERCICIO D (CONVERTENDO PES EM METRO)












