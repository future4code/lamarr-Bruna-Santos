import { connection } from "./connection"

const mensagemErro = (error:any) => {console.log(error.sqlMessage || error.message)}

const criarTabelas = () => connection
.raw( `
    CREATE TABLE Aula_servicos_enderecos(
        id INT PRIMARY KEY,
        cep VARCHAR(100) NOT NULL, 
        logradouro VARCHAR(255) NOT NULL,
        numero INT NOT NULL,
        complemento VARCHAR(255),
        bairro VARCHAR (100) NOT NULL,
        cidade VARCHAR(100) NOT NULL,
        estado VARCHAR(100) NOT NULL
    )
`)
.then(()=> {console.log("Tabela criada com sucesso!")})
.catch(mensagemErro)

criarTabelas()