// Gerador de itens únicos
// A ideia é unir duas listas de objetos, mas sem repetir os que possuem 
//o mesmo valor em uma propriedade.

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

const terceiraLista = [...primeiraLista,...segundaLista]


const listaSemRepeticao = (array) => [
    ...terceiraLista.reduce(
        (map, item)=> map.set(item.nome, item), new Map()
    ).values()
]

console.log(listaSemRepeticao(terceiraLista))