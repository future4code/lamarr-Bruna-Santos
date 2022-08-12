import React from "react";
import { BotoesHome, DivHome, DivListaViagens } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../../Hooks/UseRequestData";

export const LisTripsPage=()=>{

    const [listaViagens,isLoading] =useRequestData()

    const componentesLista=listaViagens.map((item, index)=>{
        return(
            <DivListaViagens key={index}>
                <h2>{item.name}</h2>
                <p><strong>Planeta:</strong> {item.planet}</p>
                <p>{item.description}</p>
                <p><strong>Duração em dias:</strong> {item.durationInDays}</p>
                <p><strong>Data:</strong> {item.date}</p>
            </DivListaViagens>
        )
    })

    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }

    const formulario=()=>{
        navigate("/trips/application")
    }

    return(
        <DivHome> 
            {isLoading? 
            <p>Carregando...</p> 
            :
            <>
                <h1>Lista de Viagens</h1>
                {componentesLista}
                <BotoesHome>
                    <button onClick={voltar}>Voltar</button>
                    <button onClick={formulario}>Inscreva-se</button>
                </BotoesHome>
            </>

}
        </DivHome>
    
        )
}