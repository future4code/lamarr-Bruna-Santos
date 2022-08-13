import React, { useEffect, useState } from "react";
import axios from 'axios'

export const useRequestData=()=>{

const [listaDeViagens, setListaDeViagens]=useState([])
const [isLoading, setIsLoading]=useState(false)

const urlViagens="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips"


const obterViagens=()=>{
    setIsLoading(true)
    axios.get(urlViagens).then((response)=>{
        setIsLoading(false)
        setListaDeViagens(response.data.trips)
    })
}

useEffect(()=>{
    obterViagens()
},[])

return [listaDeViagens, isLoading]
}