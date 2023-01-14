import { Knex } from "knex";
import { TABLE_USERS } from "../database/tableNames";
import { Users } from "./User";

export class UserDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertUser=async(newUser:Users)=>{
       await this.connection(TABLE_USERS).insert(newUser);
    }
    public getUsers=async()=>{
       const result= await this.connection(TABLE_USERS).select();
       return result;
    }
}