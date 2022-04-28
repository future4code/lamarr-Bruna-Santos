// EXERCICIO INTERPRETAÇÃO DE CÓDIGO
// 1:
// a) O código vai verificar se o número inserido pelo usuário é divisivel por 2, pois se o número for divisivel 
// o resultado do resto da divisão (%) será 0. Se o número for divisivel, vai retornar a mensagem: Passou no teste, 
// se não, vai retornar a mensagem: Não passou no teste.

// b) Para todos os números pares 
// c) Para todos os números impares

// 2:
// a) Serve para encontrar o preço da Fruta escolhida pelo usuário
// b) O preço da fruta maçã é de R$ 2.25
// c) O preço da fruta Pêra é R$ 5

// 3:
// a) tranformando o valor recebido pelo usuário em número.
// b) 10: Esse número passou no teste // -10: Não vai retornar nada.
// c) Não é necessário inserir o console.log(mensagem), pois o valor a ser impresso
// já foi informado no primeiro console.log.

// EXERCICIOS DE ESCRITA DE CÓDIGOS

// EXERCICIO 1:
function maiorDeIdade () {
    let idade = prompt("Qual a sua idade?")
    let idadeNumero = Number(idade)
if (idadeNumero >= 18) {
    console.log("Você pode dirigir")
}
else {
    console.log("Você não pode dirigir")
}
}
maiorDeIdade()

// EXERCICIO 2:

function turno () {
    let seuTurno = prompt("Escolha um turno: M (matutino), V (vespertino) ou N (noturno)")
    if (seuTurno === "M") { 
    console.log("Bom dia!")
    }
    else if (seuTurno === "V") {
        console.log("Boa tarde!")
    }
    else {
        console.log("Boa noite!")
    }
}
turno()

// Exercicio 3:

const turnoEscola = prompt("Escolha um turno: M (matutino), V (vespertino) ou N (noturno")

switch(turnoEscola){
    case "M":
        console.log("Bom dia")
    break;
    case "V":
        console.log("Boa tarde")
    break;
    case "N":
        console.log("Boa noite")
    break;
    }

// EXERCICIO 4:

/* function cinema (){
    let generoFilme = prompt("Qual gênero de filme você deseja assistir?")
    let valorIngresso = prompt("Qual o preço do ingresso?")
    let valorIngressoNumero = Number (valorIngresso)

    if ((generoFilme === "fantasia") && (valorIngressoNumero < 15)) {
    console.log("Bom filme!")
}
    else {
        console.log("Escolha outro filme :(")
    }
}
cinema() */

// DESAFIO:
// 1:
function cinema (){
    let generoFilme = prompt("Qual gênero de filme você deseja assistir?")
    let valorIngresso = prompt("Qual o preço do ingresso?")
    let valorIngressoNumero = Number (valorIngresso)
    let lanche = prompt("Qual lanche você vai comprar?")

    if ((generoFilme === "fantasia") && (valorIngressoNumero < 15)) {
    console.log(`Bom filme!, aproveite seu ${lanche}`)
}
    else {
        console.log("Escolha outro filme :(")
    }
}
cinema()

// 2:

    let nome = prompt("Digite seu nome completo")
    let tipo = prompt("Qual o tipo de jogo? Digite IN para internacional ou DO para doméstico")
    let etapa = prompt ("Qual a etapa do jogo? Digite SF para semi-final; DT para decisão de terceiro lugar ou FI para final")
    let categoria = prompt("Qual a categoria do seu ingresso? (1,2,3 ou 4?")
    let quantidade = prompt("Qual a quantidade de ingressos que deseja comprar?")
    
    const calculaValor = quantidade => {
        if(tipo === "DO") {
            if(etapa === "SF") {
                if(categoria === "1") {
                    return quantidade * 1320
                } else if(categoria === "2") {
                    return quantidade * 880
                } else if(categoria === "3") {
                    return quantidade * 550
                } else if(categoria === "4") {
                    return quantidade * 220
                }
            } else if(etapa === "DT") {
                if(categoria === "1") {
                    return quantidade * 660
                } else if(categoria === "2") {
                    return quantidade * 440
                } else if(categoria === "3") {
                    return quantidade *  330
                } else if(categoria === "4") {
                    return quantidade * 170
                }
            } else if(etapa ==="FI") {
                if(categoria === "1") {
                    return quantidade * 1980
                } else if(categoria === "2") {
                    return quantidade * 1320
                } else if(categoria === "3") {
                    return quantidade * 880
                } else if(categoria === "4") {
                    return quantidade * 330
                }
            }
        } else if(tipo === "IN") {
            if(etapa === "SF") {
                if(categoria === "1") {
                    return (quantidade * (1320/4.10))

                } else if(categoria === "2") {
                    return (quantidade * (880/4.10))

                } else if(categoria === "3") {
                    return (quantidade * (550/4.10))

                } else if(categoria === "4") {
                    return (quantidade * (220/4.10))

                }
            } else if(etapa === "DT") {
                if(categoria === "1") {
                    return (quantidade * (660/4.10))

                } else if(categoria === "2") {
                    return (quantidade * (440/4.10))

                } else if(categoria === "3") {
                    return (quantidade * (330/4.10))

                } else if(categoria === "4") {
                    return (quantidade * (170/4.10))

                }
            } else if(etapa ==="FI") {
                if(categoria === "1") {
                    return (quantidade * (1980/4.10))

                } else if(categoria === "2") {
                    return (quantidade * (1320/4.10))

                } else if(categoria === "3") {
                    return (quantidade * (880/4.10))

                } else if(categoria === "4") {
                    return (quantidade * (330/4.10))

                }
            }
        }
    }
    
    console.log(`Nome: ${nome}`)
    console.log(`Tipo de jogo: ${tipo}`)
    console.log(`Etapa do jogo: ${etapa}`)
    console.log(`Categoria: ${categoria}`)
    console.log(`Quantidade: ${quantidade}`)
    console.log(`Valor final: ${ calculaValor(Number(quantidade)) }`)