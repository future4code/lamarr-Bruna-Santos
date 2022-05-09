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

/*     console.log("Boas vindas ao jogo de Blackjack!")

    confirm("Quer iniciar uma nova rodada?")
    let primeiraCartaDoUsuario = comprarCarta()
    let segundaCartaDoUsuario = comprarCarta()
    for (; primeiraCartaDoUsuario.valor === 11 && segundaCartaDoUsuario.valor === 11;){
       primeiraCartaDoUsuario = comprarCarta()
       segundaCartaDoUsuario = comprarCarta()
    }
    
    let cartaDoUsuario = primeiraCartaDoUsuario.texto + " " + segundaCartaDoUsuario.texto + " "
    let acumuladoUsuario = primeiraCartaDoUsuario.valor +  segundaCartaDoUsuario.valor
    
    let primeiraCartaPC = comprarCarta()
    let segundaCartaPC = comprarCarta()
    for (; primeiraCartaPC.valor === 11 && segundaCartaPC.valor === 11;){
       primeiraCartaPC = comprarCarta()
       segundaCartaPC = comprarCarta()
    }
    
    let cartaPC = primeiraCartaPC.texto + " " + segundaCartaPC.texto + " "
    let acumuladoPC = primeiraCartaPC.valor + segundaCartaPC.valor
    
    let continuar = true
    
    for(;acumuladoUsuario < 22 && continuar === true;) {
       continuar = confirm (`Suas cartas são ${cartaDoUsuario}. A carta revelada do computador é ${primeiraCartaPC.texto}. \n` +
       `Deseja comprar mais uma carta?`)
       
       if(continuar === true) {
          let novaCarta = comprarCarta()
          cartaDoUsuario += novaCarta.texto + " "
          acumuladoUsuario += novaCarta.valor 
          console.log(acumuladoUsuario)
       } else if (acumuladoUsuario <= 22 && continuar === false) {
          for(; acumuladoUsuario >= acumuladoPC && acumuladoPC < 22;){
             let novaCarta = comprarCarta()
             cartaPC += novaCarta.texto + " "
             acumuladoPC += novaCarta.valor
          }
       }
    }
    
    if (acumuladoUsuario === acumuladoPC) {
       alert (`Suas cartas são ${cartaDoUsuario}. Sua pontuação é ${acumuladoUsuario}.\n`+
       `As cartas do computador são ${cartaPC}. A pontuação do computador é ${acumuladoPC}.\n`+
       `Empatou`)
       
    } else if (acumuladoUsuario > 21){
       alert (`Suas cartas são ${cartaDoUsuario}. Sua pontuação é ${acumuladoUsuario}.\n`+
       `As cartas do computador são ${cartaPC}. A pontuação do computador é ${acumuladoPC}.\n`+
       `O computador ganhou!`)
    } else if ((acumuladoUsuario > acumuladoPC) || (acumuladoPC > 21)) {
       alert (`Suas cartas são ${cartaDoUsuario}. Sua pontuação é ${acumuladoUsuario}.\n`+
       `As cartas do computador são ${cartaPC}. A pontuação do computador é ${acumuladoPC}.\n`+
       `O usuário ganhou!`)
    } else if ((acumuladoUsuario < acumuladoPC) && (acumuladoPC <= 21)) { 
       alert (`Suas cartas são ${cartaDoUsuario}. Sua pontuação é ${acumuladoUsuario}.\n`+
       `As cartas do computador são ${cartaPC}. A pontuação do computador é ${acumuladoPC}.\n`+
       `O computador ganhou!`)
    } */