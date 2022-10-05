console.log("exercicio 4");

//“Declare uma variável e atribua a ela um objeto que representa um cliente de um banco.
// Inicialize o objeto com pelo menos três propriedades e um método.”
const cliente = {
        nome:"Bruna",
        idade:"25",
        profissao:"Dev",
        login: () => {
            console.log("Usuário logado com sucesso") 
        }
    }
    cliente.login()

    const nome = cliente.nome 
    console.log(nome)

/*     //Crie uma função que soma dois números e utiliza um callback de validação para tratar erros de entrada.
function soma (num1, num2) {
    return(
        2 + 3
    )
} */