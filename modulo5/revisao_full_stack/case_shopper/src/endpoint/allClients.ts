import { Request, Response } from "express";
import { connection } from "../dataBase/connections";

export const getAllClients=async (req:Request, res:Response)=>{
    let errorCode = 400;

    try{
        const client = await connection.select('*').from("Case_Clients")

        res.status(200).send(client)

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}