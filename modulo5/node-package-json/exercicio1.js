//  como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// RESPOSTA:  process.argv[indice]

let nome = process.argv[2]
let idade = Number(process.argv[3])
let idadeFutura = Number (idade + 7)

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura} anos.`)



