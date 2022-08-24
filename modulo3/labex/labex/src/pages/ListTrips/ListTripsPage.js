import React from "react";
import { BotoesHome, DivCarrossel, DivHome, DivListaViagens } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../../Hooks/UseRequestData";


export const LisTripsPage=()=>{

    const [listaViagens,isLoading] =useRequestData()

    const componentesLista=listaViagens.map((item, index)=>{
        return(
            <DivListaViagens key={index}>
                <h2>{item.name}</h2>
                <p><span>Planeta:</span> {item.planet}</p>
                <p>{item.description}</p>
                <p><span>Duração em dias:</span> {item.durationInDays}</p>
                <p><span>Data:</span> {item.date}</p>
            </DivListaViagens>
        )
    })

    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }

    const formularioCandidato=()=>{
        navigate("/trips/application")
    }


    return(
        <DivHome> 
            {isLoading? 
            <h3>Carregando...</h3> 
            :
            <>
                <h1>Lista de Viagens</h1>
                <DivCarrossel>
                    {componentesLista}
                </DivCarrossel>
                <BotoesHome>
                    <button onClick={voltar}>Voltar</button>
                    <button onClick={formularioCandidato}>Inscreva-se</button>
                </BotoesHome>
            </>

}
        </DivHome>
    
        )
}