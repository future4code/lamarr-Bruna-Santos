import React, { useEffect, useState } from "react";
import { DivAdminHomePage, DivBotoesHomePage, DivListaDeViagens } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import axios from 'axios'
import { useRequestData } from "../../Hooks/UseRequestData";
import { DivListaViagens } from "../ListTrips/Styled";


export const AdminHomePage=()=>{
    const [listaViagens,isLoading] =useRequestData()

    const componentesLista=listaViagens.map((item, index)=>{
        return(
            <DivListaDeViagens key={index}>
                <button>{item.name}</button>
            </DivListaDeViagens>
        )
    })
    useProtectedPage()
    useEffect(()=>{
        const token = localStorage.getItem("token")

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
             <div>
                {componentesLista}
            </div> 
        </DivAdminHomePage>
    )
}