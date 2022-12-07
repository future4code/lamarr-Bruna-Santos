import { Request, Response } from "express";
import { getAddress } from "../services/getAddress";
import { infoEndereco } from "../types";

export default async function createUser(
    req: Request,
    res: Response
): Promise<void>{
    try{
        const {cep, numero, complemento} = req.body;
        
        if(!cep || !numero){
            res.statusCode = 422
            throw "cep e número são obrigatórios."
        }

        let address = await getAddress(cep)

        const newAddress: infoEndereco = {...address, "numero": numero, "complemento": complemento}

        console.log(newAddress)
        

        res.status(201).send(newAddress)
    }catch(error:any){
        res.send(error)
    }
}