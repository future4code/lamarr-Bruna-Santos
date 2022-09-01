import React from "react";
import { BotoesHome, DivHome, DivListaViagens, DivCarrossel } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../../Hooks/UseRequestData";
import { CircularProgress } from "@mui/material";
import { DivCarregando } from "../LoginPage/Styled";



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
            <DivCarregando>
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
            </DivCarregando>              :
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