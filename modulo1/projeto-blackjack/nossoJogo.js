/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 console.log("Boas vindas ao jogo de Blackjack!")

   if (confirm("Quer iniciar uma nova rodada?")) {
      const cartaUsuarioUm = comprarCarta()
      const cartaUsuarioDois= comprarCarta()
      const resultadoUsuario = cartaUsuarioUm.valor + cartaUsuarioDois.valor
      let usuario = console.log(`Usuário - cartas: ${cartaUsuarioUm.texto} ${cartaUsuarioDois.texto} - pontuação ${resultadoUsuario}`)
      
      const cartaComputadorUm = comprarCarta ()
      const cartaComputadorDois = comprarCarta ()
      const resultadoComputador = cartaComputadorUm.valor + cartaComputadorDois.valor
      let computador = console.log(`Computador - cartas: ${cartaComputadorUm.texto} ${cartaComputadorDois.texto} - pontuação ${resultadoComputador}`)
      if (resultadoUsuario === resultadoComputador){
         console.log("Empate")
      }  else if ((resultadoUsuario > resultadoComputador) && (resultadoUsuario <= 21)){
         console.log("O usuário ganhou!")
      }
      else {
         console.log("O computador ganhou!")
      }
}     else {
   console.log("O jogo acabou")
}  

