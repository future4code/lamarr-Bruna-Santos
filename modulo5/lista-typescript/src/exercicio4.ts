enum SETORES {
    marketing= "MARKETING",
    vendas="VENDAS",
    financeiro="FINANCEIRO"
}

type Funcionario={
    nome:string,
    salário:number,
    setor:SETORES,
    presencial:boolean
}

const funcionarios: Funcionario[] = [
	{ nome: "Marcos", salário: 2500, setor: SETORES.marketing, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETORES.vendas, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETORES.financeiro, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETORES.marketing, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETORES.financeiro, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETORES.vendas, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETORES.marketing, presencial: true }
]

function funcionariosDoMarketing(pessoa:Funcionario[]){
    return pessoa.filter((func)=>{
        return func.setor === SETORES.marketing && func.presencial === true
    })
}

console.log(funcionariosDoMarketing(funcionarios))