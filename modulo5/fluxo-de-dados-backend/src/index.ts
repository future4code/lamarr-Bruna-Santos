import express, { Request, Response } from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

/// exercicio1:

app.get("/test", (req: Request, res: Response)=>{
    res.status(201).send("Servidor rodando na porta 3003")
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});