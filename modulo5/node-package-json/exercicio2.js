let operacao = process.argv[2]
let num1 = Number(process.argv[3])
let num2 = Number(process.argv[4])

let resultado 
switch(operacao){
	case "soma":
	    resultado = num1 + num2
		break;
	case "subtracao":
        resultado = num1 - num2
		break;
	case "multiplicacao":
        resultado = num1 * num2
		break;
	case "divisao":
        resultado = num1 / num2
		break;
}

console.log(resultado)