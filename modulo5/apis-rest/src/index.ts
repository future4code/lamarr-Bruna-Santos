import express, {Request, Response} from "express"

import cors from 'cors'
import { updateLanguageServiceSourceFile } from "typescript"
import { users } from "./dados"

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