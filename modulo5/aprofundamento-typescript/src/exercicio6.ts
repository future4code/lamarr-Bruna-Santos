type produto ={
    nome:string,
    preco:number,
    classificacao:string
}

function procurarProduto(produtos:produto[]) :produto[]{
    return produtos.map((item:produto)=>{
        if(item.classificacao === "verao"){
            return {
                nome: item.nome,
                preco: item.preco,
                classificacao: item.classificacao,
                precoDesconto:(item.preco - (item.preco * 5)/100)
            } 
        }else if (item.classificacao === "inverno"){
            return {
                nome: item.nome,
                preco: item.preco,
                classificacao: item.classificacao,
                precoDesconto:(item.preco - (item.preco * 10)/100)
            } 
        }else if (item.classificacao === "banho"){
            return {
                nome: item.nome,
                preco: item.preco,
                classificacao: item.classificacao,
                precoDesconto:(item.preco - (item.preco*4)/100)
            } 
        }else if (item.classificacao === "intimas"){
            return {
                nome: item.nome,
                preco: item.preco,
                classificacao: item.classificacao,
                precoDesconto:(item.preco - (item.preco*7)/100)
            } 
        }
    })

}

const array = [
    {
        nome:"Camiseta",
        preco:40,
        classificacao: "banho"
    }
]

console.log(procurarProduto(array))
