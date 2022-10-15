function reverter (a:string): string{
    //split -> cria um array da palavra
    let array = a.split("")
    // reverse -> inverte a ordem do array criado
    let reverteArray = array.reverse()
    // join => unindo os elementos do array em uma string.
    let join = reverteArray.join("")
    return join
}

console.log(reverter("abcd"))

