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

    if(!id || !name || !price){
        return res.status(400).send("Passe todos os parametros necessários")
    }

    mercado.push(novoProduto)
    res.status(200).send(mercado)
})

// exercicio 5:

app.get("/produtos", (req: Request, res:Response)=>{
    mercado.map((item)=>{
        return item
    })
    res.status(200).send(mercado)
})

///////// listen:

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
