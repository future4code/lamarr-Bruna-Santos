import { Knex } from "knex";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Products } from "./Products";

export class ProductsDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertProducts=async(newProducts:Products)=>{
       await this.connection(TABLE_PRODUCTS).insert(newProducts);
    }
    public getProductss=async()=>{
       const result= await this.connection(TABLE_PRODUCTS).select();
       return result;
    }
}