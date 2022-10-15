function numeros (num1:number, num2:number): {soma:number, subtracao:number, multiplicacao:number, maior:number}{
    let soma = num1 + num2
    let subtracao = num1 - num2
    let multiplicacao = num1 * num2
    let maior
    if(num1 > num2){
        maior = num1
    }else{
        maior =num2
    }
    
    return({
        soma,
        subtracao,
        multiplicacao,
        maior
    }
    )
}
console.log(numeros(20,10))

