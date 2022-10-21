enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filmeEscolhido (nome:string, ano:number, genero:GENERO, pontuacao?:number){
    if(pontuacao === undefined) {
        return{
            nome: nome,
            ano: ano,
            genero: genero
        }
    }else{
        return{
            nome: nome,
            ano: ano,
            genero: genero,
            pontuacao: pontuacao
        }
    }
}

console.log(filmeEscolhido("OOi", 2009, GENERO.ACAO, 300))

