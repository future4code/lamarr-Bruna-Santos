function anagrama(palavra:string): number{
    let array = palavra.split("")
    let tamanho = array.length
    let resultado = tamanho
    for(var i = 1; i < tamanho; i++){
        resultado *= i
    }
    return resultado
}

console.log(anagrama("bruna"))