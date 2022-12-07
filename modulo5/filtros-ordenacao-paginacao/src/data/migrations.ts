import { connection } from "./connection"
import { usuarios } from "./usuarios"

const mensagemErro = (error:any) => {console.log(error.sqlMessage || error.message)}

// criando a tabela:

const criarTabela = () => connection
.raw(`
CREATE TABLE aula48_exercicio(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL
    );
`)
.then(()=> {console.log("Tabela criada com sucesso!")})
.catch(mensagemErro)

const inserirUsuarios = () => connection("aula48_exercicio")
.insert(usuarios)
.then(()=> {console.log("Usuários inseridos com sucesso")})
.catch(mensagemErro)

criarTabela()
.then(inserirUsuarios)