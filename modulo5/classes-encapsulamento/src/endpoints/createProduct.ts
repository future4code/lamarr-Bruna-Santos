import { Request, Response } from "express"
import { Products } from "../class/Products"
import { ProductsDataBase } from "../class/ProductsDataBase"
import connection from "../database/connection"


export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const newProduct= new Products(
            Date.now().toString(),
            name,
            price
        )
        
        const productDB = new ProductsDataBase(connection);
        productDB.insertProducts(newProduct)
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}