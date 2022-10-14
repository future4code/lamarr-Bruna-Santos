function labenu (idade:number, escolaridade:string, cargaHoraria:number, curso:string): boolean{
    if (idade >= 18 && escolaridade==="completo" && cargaHoraria >= 20  && curso === "noturno") {
        return true
    }else if(idade >= 18 && escolaridade==="completo" && cargaHoraria >= 40 && curso === "integral") {
        return true 
    }else if (idade < 18 && escolaridade === "completo" || escolaridade === "incompleto" && cargaHoraria > 0 && curso === "noturno" || curso==="integral"){
        return false
    }else if ((idade >= 18 && escolaridade === "incompleto" && cargaHoraria > 0 && curso === "noturno" || curso==="integral")){
        return false
    }else if((idade >= 18 && escolaridade === "completo" && cargaHoraria < 20 && curso === "noturno")){
        return false
    }else if((idade >= 18 && escolaridade === "completo" && cargaHoraria < 40 &&  curso==="integral")){
        return false
    }
}
console.log(labenu(23, "completo", 40, "integral"))