import React from "react";
import {useNavigate} from "react-router-dom"
import { DivBotoesCriarViagem, DivCriarPaginas } from "./Styled";


export const CreateTripPage=()=>{
    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }


    return(
        <DivCriarPaginas>
            <h2>CRIAR VIAGENS</h2>
            <form>
                <input placeholder="Nome"/>
                <select>
                    <option>Escolha um planeta</option>
                </select>
                <select>
                    <option>dd/mm/aaaa</option>
                </select>
                <input placeholder="Descrição"/>
                <input placeholder="Duração em dias"/>
            </form>
            <DivBotoesCriarViagem>
                <button onClick={voltar}>Voltar</button>
                <button>Criar</button>
            </DivBotoesCriarViagem>


        </DivCriarPaginas>
    )
}