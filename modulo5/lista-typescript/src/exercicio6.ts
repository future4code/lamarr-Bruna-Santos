type Cliente={
    cliente:string
    saldoTotal:number
    debitos:number[]
}

const clientesBanco:Cliente[]=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoTotal(clientes:Cliente[]){
    for(let conta of clientes){
        while(conta.debitos.length > 0){
            let ultimaCompra = conta.debitos.pop()
             conta.saldoTotal = conta.saldoTotal - ultimaCompra
        }
    }
    return clientes.filter((negativado)=>{
        return negativado.saldoTotal < 0
    })
}

console.log(saldoTotal(clientesBanco))
