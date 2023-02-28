import {app} from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.post("/createUser", userController.createUser)
app.get("/createUser", userController.findUser)
app.delete("/:id", userController.deleteUser)

