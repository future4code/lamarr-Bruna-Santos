import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user } from "../types";


export const getAllUsers =async (req:Request, res: Response):Promise<void> => {
    try{

        //filtrando por nome:
        let name = req.query.name as string

        // condição caso o usuário não informe nenhum nome:
        if (!name){
            name = "%"
        }

        // ordenação por nome ou tipo:
        let sort = req.query.sort as string

        let order = req.query.order as string

        // caso não passe nenhum parametro na ordenação, ele automaticamente irá
        // ordenar em ordem crescente.
        
        if (!order){
            order = "asc"
        }


        // constante para os resultados:
        const resultado = await connection("aula48_exercicio")
        .where("name", "like", `%${name}%`)
        .orderBy(sort, order)
        
        


        //caso não encontre o usuário:
        if(resultado.length < 1){
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado")
        }
        
        const usuariosData = (input: any): user => {
            return{
                id: input.id,
                name:input.name,
                email: input.email,
                type: input.type
            }
        }
        const usuarios = resultado.map(usuariosData)
        res.status(200).send(usuarios)

    }catch(error:any){
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }




}