import React from "react";
import { Option, Select, H1, Label, Input } from "../PrimeiraEtapa/Style";

export function TerceiraEtapa(){

    return(
        <>
            <H1>Informações geral de ensino:</H1>
            <Label>Porque você não realizou um curso de graduação? </Label>
            <Input nome="nome" type="text"></Input>

            <Label>Você fez algum curso complementar?</Label>
            <Select>
                <Option>Curso técnico</Option>
                <Option>Curso de idiomas</Option>
                <Option>Não fiz nenhum curso</Option>
            </Select>
        </>
    )
}