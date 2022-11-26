import { app } from "./app";
import { address } from "./endpints/address";

app.post("/address", address)