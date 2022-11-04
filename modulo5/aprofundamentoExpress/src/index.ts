import express, {Request, Response} from "express"

import cors from 'cors'
import { afazeres } from "./dados"

const app = express()

app.use(express.json())

app.use(cors())

//exercicio 1:
app.get("/ping", (req:Request, res: Response)=>{
    res.status(200).send("Pong!")
})

// exercicio 4:

// CONCLUIDOS:
app.get("/afazeres/concluidos", (req: Request, res: Response)=>{
    const afazeresConcluidos = afazeres.filter((concluidos)=>{
        return concluidos.completed === true
    })
    res.status(200).send(afazeresConcluidos)
})

//INCOMPLETOS:
app.get("/afazeres/incompletos", (req: Request, res: Response)=>{
    const afazeresIncompletos = afazeres.filter((concluidos)=>{
        return concluidos.completed === false
    })
    res.status(200).send(afazeresIncompletos)
})

// exercicio 5:

app.post("/criar/afazeres", (req: Request, res: Response)=>{
    const {id, userId, title, completed} = req.body
    
    let criarAfazeres = {
        id, userId, title, completed
    }
    
    if( !id || !title || completed === undefined || !userId){
       return res.status(400).send("Passe os parametros necessários")
    }


    afazeres.push(criarAfazeres)
    res.status(200).send(afazeres)

})

/// exercicio 6:

app.put("/editar/:id", (req: Request, res: Response)=>{
    const idAfazer = Number(req.params.id)
    const {completed} = req.body

    if(!idAfazer || completed === undefined){
        return res.status(400).send("Passe os parametros necessários")
    }

    const tarefas = afazeres.find((tarefa)=>{
        return tarefa.id === idAfazer
    })

    if(!tarefas){
        return res.status(404).send("Tarefa não encontrada")
    }else{
        // retorna a posição que a tarefa selecionada está dentro do array
       const indice = afazeres.findIndex((tarefa)=>{
            return tarefa.id === idAfazer
        })

        // pega a tarefa de acordo com a sua posição, faz o spreed para manter as informações q não foram alteradas
        afazeres[indice] = {
            ...tarefas, 
            completed
        }
    }
    res.status(200).send(afazeres)
})

// exercicio 7:

app.delete("/deletar/:id", (req: Request, res: Response)=>{
    const idAfazer = Number(req.params.id)

    //caso não passe nenhum parametro:
    if(!idAfazer){
        return res.status(400).send("Passe o parametro necessário")
    }

    const tarefas = afazeres.find((tarefa)=>{
        return tarefa.id === idAfazer
    })

    //caso o parametro inserido não exista:
    if(!tarefas){
        return res.status(404).send("Tarefa não encontrada")
    }

    const indice = afazeres.findIndex((tarefa)=>{
        return tarefa.id === idAfazer
    })

    // removendo de acordo com o indice encontrado no findIndex, (o ,1 indica que vai remover apenas 1 item)
    afazeres.splice(indice,1)

    console.log(indice)
    res.status(200).send(afazeres)
})

// exercicio 8:

app.get("/procurar_afazeres/:id", (req: Request, res: Response)=>{
    const idUsuario = Number(req.params.id)

    if(!idUsuario){
        return res.status(400).send("Passe o parametro necessário")
    }

    const tarefas = afazeres.filter((tarefa)=>{
        return tarefa.userId === idUsuario
    })

    console.log(tarefas)

    if(!tarefas){
        return res.status(404).send("Tarefa não encontrada")
    }

    res.status(200).send(tarefas)
})

// exercicio 9:
// https://documenter.getpostman.com/view/22350736/2s8YK6M6es





app.listen(3002, () => {
    console.log("Servidor rodando na portaria 3002");
});


