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