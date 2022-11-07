import express, {Request, Response} from "express"

import cors from 'cors'
import { updateLanguageServiceSourceFile } from "typescript"
import { users } from "./dados"
import { type } from "os"
import { TYPE } from "./types"

const app = express()

app.use(express.json())

app.use(cors())


// Exercicio 1:
// a) Método GET.

//b):
app.get("/users",(req: Request, res: Response)=>{
    let errorCode = 400

    try{
         users.map((usuarios)=>{
            return usuarios
         })
         res.status(200).send(users)

    }catch (error: any){
        res.status(errorCode).send(error.message)
    }
})


app.listen(3002, () => {
    console.log("Server is running in http://localhost:3002");
});

// Exercicio 2:
// a: Passei via query
app.get("/types", (req: Request, res: Response)=>{
    let errorCode = 400

    try{
        const userType = req.query.type as string

        if(!userType){
            errorCode = 422
            throw new Error("Favor inserir o tipo que deseja filtrar");
        }

        const usuarioFiltrado = users.filter((tipo)=>{
            return tipo.type.toLowerCase() === userType.toLowerCase()
        })

        if(!usuarioFiltrado){
            errorCode = 404
            throw new Error("Não encontramos nenhum usuário com esse tipo");
            
        }
        res.status(200).send(usuarioFiltrado)
    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})

// b: Através do enum!
app.get("/user", (req: Request, res: Response)=>{
    let errorCode = 400

    try{
        const userName = req.query.name as string

        if(!userName){
            errorCode = 422
            throw new Error("Favor inserir o nome de um usuário");
        }

        const usuarioFiltrado = users.find((user)=>{
            return user.name.toLowerCase() === userName.toLowerCase()
        })

        if(!usuarioFiltrado){
            errorCode = 404
            throw new Error("Não encontramos nenhum usuário com esse nome");
            
        }
        res.status(200).send(usuarioFiltrado)
    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})

// 3:
