function reverso (a:string): string{
    //split -> cria um array da palavra
    var reverso = a.split("")
    // reverse -> inverte a ordem do array criado
    var reverArray = reverso.reverse()
    // join => unindo os elementos do array em uma string.
    var join = reverArray.join("")
    return join
}

console.log(reverso("abcd"))

