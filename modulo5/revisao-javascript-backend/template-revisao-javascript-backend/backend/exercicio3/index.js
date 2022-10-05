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
    if(cliente.password.length >= 6){
        contas.push(cliente)        
    }else{
        console.log("Sua senha deve possuir no mínimo 6 caracteres")
    }
}

cadastrarContas({email: "teste@gmail.com", password:"aaaaa"})
console.log(contas)