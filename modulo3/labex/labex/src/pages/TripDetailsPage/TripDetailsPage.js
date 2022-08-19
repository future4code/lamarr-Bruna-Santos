import React, { useEffect } from "react";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import axios from "axios";

export const TripDetailsPage=()=>{
    useProtectedPage()
    useEffect(()=>{
        const token = localStorage.getItem("token")

        const urlCriarViagem="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips"
        const headers={
            headers:{
                Auth: token
            }
        }
        axios.get(urlCriarViagem, headers).then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log("Deu erro:", error.response)
        })
    }, [])
    return(
        <>
            <h2>Detalhes da viagem</h2>
        </>
    )
}