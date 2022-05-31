´´´function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let resultado = arrayDeNumeros.filter((item, index) => item===numeroEscolhido)
  if (resultado.length > 0){
  return `O número ${numeroEscolhido} aparece ${(resultado.length)}x`
  } else{
    return `Número não encontrado`
  }
} ´´´