import { Request, Response } from "express";
import { getAddress } from "../services/getAddress";

export async function address(req: Request, res: Response) {
    const {cep} = req.body;

    if(!cep){
        res.statusCode= 422;
        throw new Error ("Favor inserir o CEP")
    }

    const result = await getAddress(cep)
    console.log(result)

    res.status(201).send(result)
    
}