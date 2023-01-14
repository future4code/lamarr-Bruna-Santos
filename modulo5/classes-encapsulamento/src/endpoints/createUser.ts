import { Request, Response } from "express"
import { Users } from "../class/User"
import { UserDataBase } from "../class/UserDataBase"
import connection from "../database/connection"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        const newUser= new Users(
            Date.now().toString(),
            email,
            password
        )

        const userDB = new UserDataBase(connection);
        userDB.insertUser(newUser);

/*         await connection(TABLE_USERS).insert(newUser)
 */        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}