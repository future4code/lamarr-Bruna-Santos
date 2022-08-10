import React from "react";
import { BotoesHome, DivHome } from "./Styled";
import {useNavigate} from "react-router-dom"


export const LisTripsPage=()=>{
    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }

    const formulario=()=>{
        navigate("/trips/application")
    }

    return(
        <DivHome>
            <BotoesHome>
                <button onClick={voltar}>Voltar</button>
                <button onClick={formulario}>Inscreva-se</button>
            </BotoesHome>
            <h3>Lista de Viagens</h3>
        </DivHome>
    
        )
}