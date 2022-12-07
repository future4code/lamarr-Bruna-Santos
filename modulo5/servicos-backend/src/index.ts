import { app } from "./app";
import { address } from "./endpints/address";
import createUser from "./endpints/createUser";

app.post("/address", address)
app.post("/create", createUser)