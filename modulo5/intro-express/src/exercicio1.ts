import express, {Request, Response} from 'express'
import cors from 'cors'
import { usuarios } from './dados'
import { posts } from './posts'

const app = express() 

app.use(express.json())

app.use(cors())

// exercicio 1:
app.get("/",(req:Request, res:Response)=>{
    const id = req.headers.id
    console.log(id)
    res.status(201).send('Hello from Express')
})

app.listen(3003, () => {
    console.log("Servidor executando na porta 3003");
})

// exercicio 4:
app.get("/usuarios", (req:Request, res:Response)=> {
    const usuarioMock = usuarios.map((user)=>{
        return user
    })
    res.status(200).send(usuarioMock)
})

// exercicio 7:
app.get("/posts", (req:Request, res:Response)=> {
    const postagensMock = posts.map((post)=>{
        return post
    })
    res.status(200).send(postagensMock)
})

// exercicio 8:
app.get("/posts/usuario",(req:Request, res:Response)=>{
    const idUsuario = req.headers.idUser

    if(!idUsuario){
        res.status(400).send("Colocar um id válido")
    }

    const procurarUsuario = posts.find((user)=>{
        return user.id === idUsuario
    })

    return res.status(200).send(procurarUsuario)
})