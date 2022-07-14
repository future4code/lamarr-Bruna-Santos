import React from "react";
import { DivFiltro, InputFiltro, LabelFiltro, TituloFiltro } from "../Styled";

export function Filtros(){

    return(
        <DivFiltro>
            <TituloFiltro>Filtros</TituloFiltro>

            <LabelFiltro>Valor mínimo</LabelFiltro>
            <InputFiltro placeholder="Digite um valor"></InputFiltro>

            <LabelFiltro>Valor máximo</LabelFiltro>
            <InputFiltro placeholder="Digite um valor"></InputFiltro>

            <LabelFiltro>Busca por nome</LabelFiltro>
            <InputFiltro placeholder="Digite o nome"></InputFiltro>
        </DivFiltro>
    )

}
