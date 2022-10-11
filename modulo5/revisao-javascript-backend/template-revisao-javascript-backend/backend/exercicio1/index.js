//Conversor de temperatura:
//Crie um conversor de temperaturas para as escalas em Fahrenheit e Kelvin. 

//Entrada
//O valor numérico em grau Celsius e uma string. “F” para Fahrenheit e “K” para Kelvin.

//Saída
//Saída: uma frase correspondente.

//Validações
//Depois de finalizar a implementação básica, trate os valores de entrada. O primeiro 
//parâmetro deve ser sempre um número e o segundo uma string “F” ou “K” maiúsculas.

const validacao = (texto) =>{
    console.log(texto)
}

function temperatura (texto, num1, callback) {
    if(texto === "K"){
        callback(` ${num1}° Celsius é equivalente a ${num1+273.15}° Kelvin`)
    }else if (texto === "F"){
        callback(`  ${num1}° Celsius é equivalente a ${(1.8 * num1)+32}° Farenheit`)
    }else if (texto !== "F" || texto !== "K"){
        callback(`Erro. Parâmentro ${texto} inválido`)
    }/* else if (typeof(num1 === String)){
        callback(`Erro. Parâmentro ${num1} inválido`)
    } */
}
temperatura("K", "30", validacao)