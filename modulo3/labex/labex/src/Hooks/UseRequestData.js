import React, { useEffect, useState } from "react";
import axios from 'axios'

export const useRequestData=()=>{

const [listaDeViagens, setListaDeViagens]=useState([])
const [listaDeCandidatos, setListaDeCandidatos]=useState([])
const [isLoading, setIsLoading]=useState(false)

const urlViagens="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips"
const urlCandidatos="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips/:id/apply"


const obterViagens=()=>{
    setIsLoading(true)
    axios.get(urlViagens).then((response)=>{
        setIsLoading(false)
        setListaDeViagens(response.data.trips)
    })
}

/* const obterCandidatos-()=>{
    setIsLoading(true)
    axios.post(urlCandidatos)
} */

useEffect(()=>{
    obterViagens()
},[])

return [listaDeViagens, isLoading]
}