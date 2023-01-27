import { UserDatabase } from "../data/UserDatabase"
import { InsertUsersInputDTO, UsersInputDTO } from "../model/UserDTOS"
import { generateId } from "../services/idGenerator"

export class UserBusiness {
  async create({ email, name, password }: UsersInputDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()

    const usersInput:InsertUsersInputDTO ={
      id,
      name,
      email,
      password
    }
    
    await userDatabase.create(usersInput)
  }

  public getUsers = async () =>{
    try{
      const userDatabase = new UserDatabase()
      
      return userDatabase.getUsers();
    }catch(error:any){
      throw new Error(error.message)
    }
  }

}
