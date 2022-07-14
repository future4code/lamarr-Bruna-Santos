import React, { useState } from "react";
import { H1, Input, Label, Option, Select } from "./Style";

export function PrimeiraEtapa(){


    return(
        <>
            <H1>Dados gerais:</H1>
            <Label>1. Qual o seu nome? </Label>
            <Input nome="nome" type="text"></Input>

            <Label>2. Qual o sua idade? </Label>
            <Input nome="nome" type="text"></Input>

            <Label>3. Qual o seu e-mail? </Label>
            <Input nome="email" type="text"></Input>

            <Label>4. Qual a sua escolaridade? </Label>
            <Select>
                <Option hidden></Option>
                <Option>Ensino Médio Incompleto</Option>
                <Option>Ensino Médio Completo</Option>
                <Option>Ensino Superior Incompleto</Option>
                <Option>Ensino Superior Completo</Option>

            </Select>


        </>
        
    )

}