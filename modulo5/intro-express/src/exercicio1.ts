import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express() 

app.use(express.json())

app.use(cors())

app.get("/",(req:Request, res:Response)=>{
    const id = req.headers.id
    console.log(id)
    res.status(201).send('Hello from Express')
})

app.listen(3003, () => {
    console.log("Servidor executando na porta 3003");
})

//exercicio 2:

type Usuario ={
    id:number
    name:string
    phone: number
    email:string 
    website:string
}

// exercicio 3: