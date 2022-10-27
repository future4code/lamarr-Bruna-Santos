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


//exercicio 2:

type Usuario ={
    id:number
    name:string
    phone: number
    email:string 
    website:string
}

<<<<<<< HEAD
// exercicio 8:
app.get("/posts/usuario",(req:Request, res:Response)=>{
    const usuarioId = req.headers.iduser
    const postagemId = req.query.id

    if(!usuarioId && !postagemId){
        res.status(400).send("Colocar um id válido")
    }

    const usuarioFiltrado = posts.filter((user)=>{
        return user.id === usuarioId
    })
})

app.listen(3003, () => {
    console.log("Servidor executando na porta 3003");
})
=======
// exercicio 3:
>>>>>>> parent of 96f7a9b (FEAT: Resolução dos exercicios: 2,3,4,5,6 e 7)
