function nascimento(nome:string, nascimento:string):string{
    let seuNome = nome
    let transformarEmArray = nascimento.split("/")

    return (`Olá, me chamo ${seuNome}, nasci no dia ${transformarEmArray[0]} do mês ${transformarEmArray[1]} do ano de ${transformarEmArray[2]}`)
}

console.log(nascimento("Bruna", "26/06/1997"))