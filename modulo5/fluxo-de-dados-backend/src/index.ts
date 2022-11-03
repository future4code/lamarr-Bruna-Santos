import express, { Request, Response } from "express"

import cors from 'cors'
import { mercado } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

/// exercicio1:

app.get("/test", (req: Request, res: Response)=>{
    res.status(201).send("Servidor rodando na porta 3003")
})

//exercicio 4:
app.post("/new_produto", (req: Request, res: Response)=>{
    const {id, name, price} = req.body

    let novoProduto ={
        id, name, price
    }
    
    if (!id && !name && !price){
        return res.status(400).send("Insira todos os parametros necessário")

    }else if (!id ){
        return res.status(400).send("Insira o id do produto")
    }else if(!name ){
        return res.status(400).send("Insira o nome do produto")
/*     }else if(name === Number){
        return res.status(400).send("O nome do produto deve ser composto apenas por letras.") */
    }else if(!price){
        return res.status(400).send("Insira o preço do produto")
/*     }else if(price === String){
        return res.status(400).send("O preço deve ser composto apenas por números") */
    }/* else if(price === 0 ){
        return res.status(400).send("Insira um preço maior do que 0.00")
    } */

    console.log("Produto adicionado com sucesso")
    mercado.push(novoProduto)
    res.status(201).send(mercado)
})

// exercicio 5:

app.get("/produtos", (req: Request, res:Response)=>{
    mercado.map((item)=>{
        return item
    })
    res.status(200).send(mercado)
})

// exercicio 6: Editar o preço.

app.put("/editar/:id", (req: Request, res:Response)=>{
    const id = req.params.id
    const {price}=req.body

    if(!id && !price){
        return res.status(400).send("Passe todo os parametros corretamente")
    }else if (!price){
        return res.status(400).send("Insira o novo preço")
    }

    const alterarProduto = mercado.find((produto)=>{
        return produto.id === id
    })

    if(!alterarProduto){
        return res.status(404).send("Produto não encontrado")
    }else{
        //pegar o indice do produto
        const indice = mercado.findIndex((produto)=>{
            return produto.id === id
        })

        // fazendo o spreed para manter as informações q não foram alteradas
        mercado[indice] ={
            ...alterarProduto, 
            price
        }
    }
    console.log("Produto editado com sucesso")
    res.status(200).send(mercado)
})

//exercicio 7:

app.delete("/deletar/:id", (req:Request, res: Response)=>{
    const id = req.params.id

    if(!id){
        return res.send(400).send("Informe o id do produto!")
    }

    const deletarProduto = mercado.find((produto)=>{
        return produto.id === id
    })

    if(!deletarProduto){
        return res.send(404).send("Produto não encontrado")
    }

    const indice = mercado.findIndex((produto)=>{
        return produto.id === id
    })

    mercado.splice(indice,1)
    console.log("Produto deletado com sucesso")
    res.status(200).send(mercado)
    
})



///////// listen:

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
