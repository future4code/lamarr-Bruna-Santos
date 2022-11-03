function digiteAlgumaCoisa(algumaCoisa:string | number | boolean){
    return typeof(algumaCoisa)
}

console.log(digiteAlgumaCoisa(34))
console.log(digiteAlgumaCoisa("Bruna"))
console.log(digiteAlgumaCoisa(true))