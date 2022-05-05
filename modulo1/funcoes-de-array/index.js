// INTERPRETAÇÃO DE CÓDIGO
// 1: Ele vai imprimir um novo array para cada usuário e também o array todo.
// 2: Ele vai imprimir um novo array apenas com o nome de cada usuário.
// 3: Vai ser impresso apenas os usuários que não contém o apelido Chijo.

// ESCRITA DE CÓDIGO
// 1:
/* const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomesPets = pets.map ((item, index, array) =>{
    console.log(item.nome) 
})

const racaSalsicha = pets.filter((item, index, array) =>{
    return item.raca === "Salsicha"
})
console.log(racaSalsicha)

const racaPoodle =  pets.filter((item, index, array) =>{
    return item.raca === "Poodle"
})
racaPoodle.map((item) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
}) */

// 2:

/* const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a
 const nomeProdutos = produtos.map ((item, index, array) => {
     console.log(item.nome)

 })
 //b
 const produtosComDesconto = produtos.map ((item, index, array) => {
    return {
        "nome": item.nome,
        "preco": (item.preco*0.95).toFixed(2)
    }
 })
console.log(produtosComDesconto)

 //c
 const categoriaBebidas = produtos.filter ((item, index, array)=> {
     return item.categoria  === "Bebidas"
 })
    console.log(categoriaBebidas)

//d
const ipe = produtos.filter ((item, index, array) => {
    if (item.nome.includes("Ypê")){
    return item.nome
    }
})
console.log(ipe)


//e
const ipeDois = ipe.map ((item, index, array) =>{
    return `Compre ${item.nome} por ${item.preco.toLocaleString("pt-br", {style:"currency", currency: "BRL"})}`
})
console.log(ipeDois) */

// DESAFIO

//1:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

pokemons.sort(function (a,b){
    if (a.nome < b.nome)
        return -1
    if (a.nome > b.nome)
        return 1
    return 0
})

const ordemAlfabetica = pokemons.map ((item, index, array) =>{
    console.log(item.nome)
    })


const apenasOsTipos = pokemons.map((item, index,array) => {
    return item.tipo
})

let conjunto = new Set(apenasOsTipos)
console.log(conjunto)


