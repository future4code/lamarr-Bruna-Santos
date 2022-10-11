// SISTEMA DE LOGIN

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

function cadastrarContas(cliente){
    if(cliente.password.length < 6){
        console.log("Sua senha deve possuir no mínimo 6 caracteres")
    }else if (!cliente.email.includes("@")){
        console.log("Email invalido")
    }else{
        contas.push(cliente)
        console.log("Login bem-sucedido")  
    }
}

cadastrarContas({email: "teste@gmail.com", password:"aaaaaaaa"})
console.log(contas)