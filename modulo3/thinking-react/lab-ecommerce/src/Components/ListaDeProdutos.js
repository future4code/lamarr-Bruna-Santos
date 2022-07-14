import React from "react";
import { DivListaDeProdutos, DivProdutosExibidos, ImagemExibida, Produtos, ProdutosExibidos } from "../Styled";


export const ListaDeProdutos=(props)=>{

    function adicionarItensNoCarrinho(item){
        props.adicionarAoCarrinho([...props.carrinho, item])

    }


    const componentsTarefas=props.meusProdutos.map((item, index)=>{
        return (
            <DivListaDeProdutos key={index}>
                <ImagemExibida>{item.imagem}</ImagemExibida>
                <ProdutosExibidos>{item.nomeDoProduto}</ProdutosExibidos>
                <ProdutosExibidos>R$ {item.valor}</ProdutosExibidos>
                <button onClick={()=>adicionarItensNoCarrinho(item)}>Adicionar ao carrinho</button>
            </DivListaDeProdutos>
        )
    })

    return(
        <DivProdutosExibidos>
            {componentsTarefas}
        </DivProdutosExibidos>
    )
}