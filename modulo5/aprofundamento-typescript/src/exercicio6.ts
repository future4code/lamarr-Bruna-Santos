type produto ={
    nome:string,
    preco:number,
    classificacao:string
}

function procurarProduto(nome:string, preco:number, classificacao:string): number{

    if(classificacao === "verao"){
        return (preco - (preco * 5)/100)
    }else if (classificacao === "inverno"){
        return (preco - (preco * 10)/100)
    }else if (classificacao === "banho"){
        return (preco - (preco*4)/100)
    }else if (classificacao === "intimas"){
        return (preco - (preco*7)/100)
    }
}



console.log(procurarProduto("Camiseta", 40, "banho"))

//////////INCOMPLETO