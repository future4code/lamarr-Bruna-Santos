import express from "express"
import cors from "cors"
import { ping } from "./endpoint/ping";
import { createClient } from "./endpoint/createClient";
import { getAllClients } from "./endpoint/allClients";
import { getAllProducts } from "./endpoint/allProducts";
import { createOrder } from "./endpoint/createOrder";
import { getStock } from "./endpoint/stock";

const app = express()

app.use(express.json());
app.use(cors());

app.get("/ping", ping)

// Criar cliente
app.post("/client", createClient)

//retornar clientes:
app.get("/client", getAllClients)


// retornar produtos:
app.get("/products", getAllProducts)

// fazer pedido
app.post("/order", createOrder)

//stock:
app.get("/stock", getStock)



app.listen(3003,()=>{
    console.log("Servidor rodando na porta 3003.")
})
