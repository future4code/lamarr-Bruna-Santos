function nascimento(nome:string, nascimento:string){
    let seuNome = nome
    let transformarEmArray = nascimento.split("")
    let dia = []
    dia.push(transformarEmArray[0])
    dia.push(transformarEmArray[1])
    let juntarDia = dia.join("")

    let mes = []
    mes.push(transformarEmArray[3])
    mes.push(transformarEmArray[4])
    let juntarMes = mes.join("")


    let ano = []
    ano.push(transformarEmArray[6])
    ano.push(transformarEmArray[7])
    ano.push(transformarEmArray[8])
    ano.push(transformarEmArray[9])
    let juntarAno = ano.join("")

    return (`Olá, me chamo ${seuNome}, nasci no dia ${juntarDia} do mês ${juntarMes} do ano de ${juntarAno}`)
}

console.log(nascimento("Bruna", ("26/06/1997")))