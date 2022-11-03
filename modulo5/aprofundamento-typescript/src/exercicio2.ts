type Estatisticas ={
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number[]):Estatisticas {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([10,5,15]))


type Amostra ={
    numeros:number[]
    obterEstatisticas: (numeros:number[]) => Estatisticas
}

const amostraDeIdades:Amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas : obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros));
