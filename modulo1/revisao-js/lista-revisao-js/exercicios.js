// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function comparar (a,b){
    return a-b    
  })  
  return (array)
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((par) => par % 2 === 0)

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array.filter((par) => par % 2 === 0).map((numerosPares) => Math.pow(numerosPares,2))
  }
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
const max = Math.max(...array)
return(max)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 let resultado = {
   maiorNumero: 0, maiorDivisivelPorMenor: 0, diferenca: 0
 }
  if (num1>num2){ 
    resultado.maiorNumero = num1
    if (num1 % num2 === 0){
      resultado.maiorDivisivelPorMenor = true
    } else {
      resultado.maiorDivisivelPorMenor = false
    }
    resultado.diferenca = num1 - num2
 } else {
   resultado.maiorNumero = num2
   if (num2 % num1 === 0){
    resultado.maiorDivisivelPorMenor = true
  } else {
    resultado.maiorDivisivelPorMenor = false
  }
  resultado.diferenca = num2 - num1
 }
 return resultado
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = []
  let numeros = 0
  while (array.length < n){
    array.push(numeros)
    numeros += 2
  }
  return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if ((ladoA !== ladoB) && (ladoA !== ladoC) && (ladoB !== ladoC)){
    return("Escaleno")
  }
  else if ((ladoA === ladoB) && (ladoA === ladoC) && (ladoB === ladoC)){
    return ("Equilátero")
  } else {
    return ("Isósceles")
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort(function comparar (a,b){
    return a-b    
  })  

  let segundoMenor = array[1]
  let segundoMaior = array[array.length-2]
  return [segundoMaior, segundoMenor]
 
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
    return(`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`)
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let outraPessoa ={
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return(outraPessoa)
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
const pessoasAutorizadas = pessoas.filter ((item, index, array) => {
  return (item.idade > 14 && item.idade < 60 && item.altura >= 1.5)
})
return(pessoasAutorizadas)

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter ((item, index, array) => {
    return (item.idade <= 14 || item.idade > 60 || item.altura < 1.5)
  })
  return(pessoasNaoAutorizadas)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for(let conta of contas){
     while (conta.compras.length > 0){
      let ultimaCompra = conta.compras.pop()
      conta.saldoTotal = conta.saldoTotal - ultimaCompra
    }
   } 
   return(contas) 
 }


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a,b){
      return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
      }) 
      return(consultas)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}

