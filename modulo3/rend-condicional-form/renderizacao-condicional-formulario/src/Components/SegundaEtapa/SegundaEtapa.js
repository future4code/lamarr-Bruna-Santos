import React from "react";
import { H1, Input, Label } from "../PrimeiraEtapa/Style";

export function SegundaEtapa(){

    return(
        <>
            <H1>Informações referente ao seu ensino superior</H1>
            <Label>Qual o curso realizado?</Label>
            <Input nome="nome" type="text"></Input>  

            <Label>Instituição de ensino:</Label>
            <Input nome="nome" type="text"></Input>   
        </>

    )
}