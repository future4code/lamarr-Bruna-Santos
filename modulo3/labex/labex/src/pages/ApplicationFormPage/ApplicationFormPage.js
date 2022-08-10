import React from "react";
import { DivBotoesFormulario, DivFormulario } from "./Styled";
import {useNavigate} from "react-router-dom"


export const ApplicationFormPage=()=>{
    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <DivFormulario>
            <h2>Inscreva-se para uma viagem</h2>
            <form>
                <select>
                    <option>Escolha uma viagem</option>
                </select>
                <input placeholder="Nome"/>
                <input placeholder="Idade"/>
                <input placeholder="Texto de candidatura"/>
                <input placeholder="Profissão"/>
                <select name="países" id="paises">
                    <option>Selecione o seu país</option>
                </select>
            </form>
            <DivBotoesFormulario>
                <button onClick={voltar}>Voltar</button>
                <button>Enviar</button>
            </DivBotoesFormulario>
        </DivFormulario>
    )


}
