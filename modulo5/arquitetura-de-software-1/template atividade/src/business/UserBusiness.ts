import { UserDatabase } from "../data/UserDatabase";

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

    findUser = () => {};
    deleteUser = () => {};
}