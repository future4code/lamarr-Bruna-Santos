import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getUsers = async (req:Request, res:Response) => {
    try{
      const userBusiness = new UserBusiness();
      const users = await userBusiness.getUsers()

      res.status(201).send(users)
    }catch(error:any){
      res.status(400).send(error.message)
    }
  }
}
