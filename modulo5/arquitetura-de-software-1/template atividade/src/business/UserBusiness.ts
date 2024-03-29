import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types/user";

export class UserBusiness {
    createUser = async (input:any): Promise<void>=>{
        try{
            const {name, email, password} = input;

            if (!name){
                throw new Error("Preencha o nome do usuário;")
            }else if (!email){
                throw new Error("Preencha o email do usuário;")
            }else if (!password){
                throw new Error("Preencha a senha do usuário;")
            };

            const id: string = Date.now().toString();

            const userDatabase = new UserDatabase();
            
            await userDatabase.insertUser({
                id,
                name,
                email,
                password,
            });
        }catch(error:any){
            throw new Error(error.message);
        }
    };

    async get(): Promise<user[]>{

        return await new UserDatabase().get();
    }

    async deleteUser(input: {id:string}){
        if(!input.id){
            throw new Error("Insira o id do usuário.")
        }

        return await new UserDatabase().deleteUser(input.id)
    };
}