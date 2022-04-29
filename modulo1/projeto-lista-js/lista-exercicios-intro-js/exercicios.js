// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura=prompt("Insira um valor para altura")
  let largura=prompt("Insira um valor para largura")

  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let ano=prompt("Insira o ano atual")
  let anoNascimento=prompt("Insira o ano em que você nasceu")
  console.log(ano-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome=prompt("Qual o seu nome?")
  let idade=prompt("Qual sua idade?")
  let email=prompt("Qual seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let primeiraCor=prompt("Insira uma cor favorita")
  let segundaCor=prompt("Insira mais uma cor favorita")
  let terceiraCor=prompt("Insira sua ultima cor favorita")
  let arrayCor=[primeiraCor, segundaCor, terceiraCor]
  console.log(arrayCor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 return string.toUpperCase() 

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array.shift()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 let ultimoElemento= array.pop()
 let primeiroElemento=array.splice(0,1)
 array.push(primeiroElemento[0])
 array.unshift(ultimoElemento)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase()===string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = prompt("Qual o ano atual?")
  let anoNascimento = prompt("Qual seu ano de nascimento?")
  let anoIdentidade = prompt("Qual o ano em que sua identidade foi emitida?")
  let idade = Number (anoAtual) - Number (anoNascimento)
  let validadeIdentidade = Number (anoAtual) - Number (anoIdentidade)
  if(idade <= 20){
    if(validadeIdentidade - 5 >= 0) {
      console.log(true)
    } else { 
      console.log(false)
    }
  }

  if(idade > 20 && idade <=50 ){
    if(validadeIdentidade - 10 > 0) {
      console.log(true)
    } else { 
      console.log(false)
    }
  }

  if(idade > 50 ){
    if(validadeIdentidade - 15 > 0) {
      console.log(true)
    } else { 
      console.log(false)
    }
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
   if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
     return (true)
   } else{
     return (false)
   }
  }
 

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let idadeLabenu =prompt("Você tem mais de 18 anos?")
  let ensinoMedio =prompt("Você possui ensino médio completo?")
  let disponibilidade =prompt("Você possui disponibilidade exclusiva durante os horarios do curso?")
  if( (idadeLabenu === "sim") && (ensinoMedio === "sim") && (disponibilidade === "sim")){
    console.log(true)
  } else {
    console.log(false)
  }