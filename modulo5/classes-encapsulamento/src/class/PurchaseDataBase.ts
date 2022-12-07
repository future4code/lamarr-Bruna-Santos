import { Knex } from "knex";
import { TABLE_PRODUCTS, TABLE_PURCHASES } from "../database/tableNames";
import { Purchase } from "../models/Purchase";
import { Products } from "./Products";

export class PurchaseDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertPurchase=async(newPurchase:Purchase)=>{
       await this.connection(TABLE_PURCHASES).insert(newPurchase);
    }
    public getPurchase=async()=>{
       const result= await this.connection(TABLE_PURCHASES).select();
       return result;
    }
}