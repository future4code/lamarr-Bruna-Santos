import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { DivBotoesCandidato, DivDetalhesCandidatos, DivDetalhesFesta, DivListaDeViagens, NomeAprovados } from "./Styled";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export const TripDetailsPage=()=>{
    useProtectedPage()
    useEffect(()=>{
        setIsLoading(true)
        requisicaoGet()

    }, [])

    function requisicaoGet(){
    //6: Renderizar os detalhes das viagens 
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
    })}

    //1: useNavigate para voltar a pagina anterior
    const navigate=useNavigate();
    const voltar=()=>{
        navigate(-1)
    }

    //2: trip utilizado para realizar o map
    const [trip, setTrip] = useState()
    const param=useParams()
    const [isLoading, setIsLoading]=useState(false)
    const [AprovarCandidatos, setAprovarCandidatos]=useState(true)
    const [RejeitarCandidatos, setRejeitarCandidatos]=useState(false)

    // 2.1: map para pegar as informaçoes dos candidatos:
    const candidatos=trip?.candidates.map((item, index)=>{
        //3: localStorage para deixar a página privada 
        const token = localStorage.getItem("token")

        //4: criação dos axios
        const urlDecideCandidato=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips/${param.id}/candidates/${item.id}/decide`
        const headers={
            headers:{
                auth: token
            }
        }

        // 4.1Body do axios caso o candidato seja aprovado:
        const body={
            "approve": AprovarCandidatos
        }
        
        // 4.2Axios para candidatos aprovados:
        const aprovar=(event)=>{
            axios.put(urlDecideCandidato, body, headers).then((response)=>{
                requisicaoGet()
        }).catch((error)=>{
            console.log("Deu errado")
        })
    }

        // 4.3Body do axios caso o candidato seja rejeitado:
        const bodyRejeitar={
        "approve":RejeitarCandidatos
    }
        // 4.4Axios para candidatos rejeitados:
        const rejeitar=(event)=>{
            axios.put(urlDecideCandidato, bodyRejeitar, headers).then((response)=>{
                requisicaoGet()
        }).catch((error)=>{
            console.log("Deu errado")
        })
    }   
        //2.2: return com as informações retiradas do map:
        return(
            <DivDetalhesCandidatos key={index}>
                <p><span>Nome:</span> {item.name}</p>
                <p><span>Idade:</span> {item.age}</p>
                <p><span>Profissão:</span> {item.profession}</p>
                <p><span>País:</span> {item.country}</p>
                <p><span>Descrição:</span> {item.applicationText}</p>
{/*      //4.5 botões para determinar se o candidato foi aprovado ou rejeitado  */}
                <DivBotoesCandidato>
                    <button onClick={aprovar}>Aprovar</button>
                    <button onClick={rejeitar}>Rejeitar</button>
                </DivBotoesCandidato>
            </DivDetalhesCandidatos>
        )
    })
    //5: Criação de um novo map para filtrar o nome dos usuários aprovados
     const aprovados=trip?.approved.map((item, index)=>{
        return(
            <p key={index}>- {item.name}</p>
        )
    }) 

    /* useProtectedPage() */


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
                {candidatos?.length > 0 ?
                candidatos
                :
                <p>Nenhum candidato detectado para essa viagem.</p>
                }    
                {aprovados?.length > 0 &&
                <>
                    <h2>Aprovados</h2>
                    <NomeAprovados>{aprovados}</NomeAprovados>
                </>
                }
                <button onClick={voltar}>Voltar</button>
            </>
            }      
        </DivListaDeViagens>
    )
}