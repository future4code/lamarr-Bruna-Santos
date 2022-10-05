// Cadastro de cliente:
//Crie um programa que insere um novo cliente no array de clientes.

const clientes = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

console.log(clientes)

// Inserindo de 1 em 1:
clientes.push({id: 5, nome:"Bruna"})
clientes.push({id: 6, nome:"José"})

// Inserindo 2 de uma vez só:
clientes.push({id: 7, nome:"Maria"}, {id: 8, nome:"Claudinha"})
console.log(clientes)



