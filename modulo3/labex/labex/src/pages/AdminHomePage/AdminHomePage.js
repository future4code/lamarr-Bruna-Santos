import React, { useEffect } from "react";
import { DivAdminHomePage, DivBotoesHomePage } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import axios from 'axios'


export const AdminHomePage=()=>{
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
    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }

    const logout=()=>{
        navigate("/")
    }

    const novaViagem=()=>{
        navigate("/admin/trips/create")
    }
    return(
        <DivAdminHomePage>
            <h1>Painel administrativo</h1>
            <DivBotoesHomePage>
                <button onClick={voltar}>Voltar</button>
                <button onClick={novaViagem}>Criar viagem</button>
                <button onClick={logout}>Logout</button>
            </DivBotoesHomePage>
        </DivAdminHomePage>
    )
}