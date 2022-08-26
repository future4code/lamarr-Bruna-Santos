import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { DivBotoesCriarViagem, DivCriarPaginas } from "./Styled";
import { planetas } from '../../MockDeDados/Planetas'
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import axios from 'axios'
import { useForm } from "../../Hooks/UseForm";
import { CircularProgress } from "@mui/material";
import { DivCarregando } from "../LoginPage/Styled";



export const CreateTripPage=()=>{
    const [isLoading, setIsLoading]=useState(false)

    useProtectedPage()
    const [formulario, onChange] = useForm({name: "", planet: "", date:"", description:"", durationInDays:""})

    const novaViagem=(event)=>{
        setIsLoading(true)
        event.preventDefault()
        const token = localStorage.getItem("token")
        const headers={
            headers:{
                Auth: token
            }
        }
        
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips",formulario, headers)
        .then((response)=>{
            alert("Viagem criada com sucesso")
        }).catch((error)=>{
            alert("Essa viagem não pode ser criada")
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    const navigate=useNavigate();


    const voltar=()=>{
        navigate(-1)
    }


    return(
        <DivCriarPaginas>
            {isLoading?
            <DivCarregando>
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
            </DivCarregando>    
            :
            <>
                <h1>CRIAR VIAGENS</h1>
                <form onSubmit={novaViagem}>
                    <input 
                    name="name"
                    placeholder="Nome"
                    type="name"
                    required
                    pattern="^[A-Za-z].{4,}$"
                    title="Mínimo de 5 letras."
                    value={formulario.name}
                    onChange={onChange}

                    />
                    <select required onChange={onChange} value={formulario.planet} name="planet">
                        <option type="Selection" value={""}>Escolha um planeta</option>
                        {planetas.map((item, index)=> <option value={item} key={index}>{item}</option>)}
                    </select>
                    <input
                    name="date"
                    placeholder="dd/mm/aaaa"
                    type="date"
                    required
                    pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
                    title="A data informada precisa ser maior que a data atual"
                    value={formulario.date}
                    onChange={onChange}
                    />
                    <input 
                    name="description"
                    placeholder="Descrição"
                    type="text"
                    required
                    pattern="^[A-Za-z].{29,}$"
                    title="Mínimo de 30 letras."
                    value={formulario.description}
                    onChange={onChange}
                    />
                    <input
                    name="durationInDays"
                    placeholder="Duração em dias"
                    type="number"
                    min="30"
                    required
                    value={formulario.durationInDays}
                    onChange={onChange}
                    
                    />
                    <DivBotoesCriarViagem>
                        <div onClick={voltar}>Voltar</div>
                        <button type="Submit">Enviar</button>
                    </DivBotoesCriarViagem>
                </form>
                </>
            }

        </DivCriarPaginas>
    )
}