import React, { useState } from "react";
import { Produtos } from "../MockDeDados";
import { DivCarrinho, DivItensAdicionados, TituloCarrinho, TituloProdutos } from "../Styled";

export function Carrinho(props){

    const componentsCarrinho=props.carrinho.map((item, index)=>{
        return (
            <>
                <DivItensAdicionados key={index}>
                    <TituloProdutos>{item.nomeDoProduto}</TituloProdutos>
                    <TituloProdutos> {item.valor}</TituloProdutos>
                </DivItensAdicionados>
            </>
        )
    })


    return(
        <DivCarrinho>
            <TituloCarrinho> Carrinho </TituloCarrinho>
            {componentsCarrinho}
            <p>Valor total:</p>
            

        </DivCarrinho>
    )

}