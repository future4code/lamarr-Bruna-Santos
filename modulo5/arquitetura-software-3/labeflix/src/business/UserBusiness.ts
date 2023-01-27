import { UserDatabase } from "../data/UserDatabase"
import { EmailInvalid, NameInvalid, PasswordInvalid } from "../error/UserError"
import { InsertUsersInputDTO, UsersInputDTO } from "../model/UserDTOS"
import { generateId } from "../services/idGenerator"

export class UserBusiness {
  async create({ email, name, password }: UsersInputDTO):Promise<void> {
    if (!email) {
      throw new NameInvalid()
    }else if(!email){
      throw new EmailInvalid()
    }else if(!password){
      throw new PasswordInvalid()
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
