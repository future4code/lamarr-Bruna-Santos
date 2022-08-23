import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DivBotoesCandidato, DivDetalhesCandidatos, DivDetalhesFesta, DivListaDeViagens } from "./Styled";

export const TripDetailsPage=()=>{
    const [trip, setTrip] = useState()
    const param=useParams()
    const [isLoading, setIsLoading]=useState(false)
    
    const candidatos=trip?.candidates.map((item, index)=>{
        return(
            <DivDetalhesCandidatos key={index}>
                <p><span>Nome:</span> {item.name}</p>
                <p><span>Idade:</span> {item.age}</p>
                <p><span>Profissão:</span> {item.profession}</p>
                <p><span>País:</span> {item.country}</p>
                <p><span>Descrição:</span> {item.applicationText}</p>
                <DivBotoesCandidato>
                    <button>Aprovar</button>
                    <button>Rejeitar</button>
                </DivBotoesCandidato>
            </DivDetalhesCandidatos>
        )
    })

    /* useProtectedPage() */
    useEffect(()=>{
        setIsLoading(true)
        const token = localStorage.getItem("token")

        const urlCriarViagem=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trip/${param.id}`
        const headers={
            headers:{
                auth: token
            }
        }
        axios.get(urlCriarViagem, headers).then((response)=>{
            setTrip(response.data.trip)
        }).catch((error)=>{
            console.log("Deu erro:", error.response)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }, [])

    return(
        <DivListaDeViagens>
            {isLoading? 
            <h1>Carregando...</h1>
            :
            <>
                <h1>Detalhes da viagem</h1>
                {trip && <DivDetalhesFesta>
                    <h2>{trip.name}</h2>
                    <p><strong>Planeta:</strong> {trip.planet}</p>
                    <p><strong>Descrição:</strong>{trip.description}</p>
                    <p><strong>Duração em dias:</strong> {trip.durationInDays}</p>
                    <p><strong>Data:</strong> {trip.date}</p>
                </DivDetalhesFesta>}
                <h2>Candidatos</h2>
                {candidatos}
            </>
            }      
        </DivListaDeViagens>
    )
}