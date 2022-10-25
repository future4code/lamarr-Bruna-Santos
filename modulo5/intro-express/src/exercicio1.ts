import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express() 

app.use(express.json())

app.use(cors())

app.get("/",(req:Request, res:Response)=>{
    const senha = req.headers.senha
    console.log(senha)
    res.status(201).send('Tudo ok')
})

app.listen(3003, () => {
    console.log("Servidor executando na porta 3003");
})