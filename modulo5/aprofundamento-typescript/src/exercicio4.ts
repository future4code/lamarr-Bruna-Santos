type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.table(pokemon1)

//b: criaria um script no package.json com os comandos para transpilação (tsc):
// "exercicio4": "echo Transpilando... && tsc && echo Rodando... && node ./build/exercicio4.js"

//c: Se o arquivo estiver dentro de uma pasta, você precisa informar ela no tsconfig no item: rootDir.

//d: Sim utilizando o comando tsc nomeDoArqivo.ts nomeDoOutroArquivo.ts ....

