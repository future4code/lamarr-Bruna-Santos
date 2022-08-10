import React from "react";
import { DivAdminHomePage, DivBotoesHomePage } from "./Styled";
import {useNavigate} from "react-router-dom"


export const AdminHomePage=()=>{
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
            <h2>Painel administrativo</h2>
            <DivBotoesHomePage>
                <button onClick={voltar}>Voltar</button>
                <button onClick={novaViagem}>Criar viagem</button>
                <button onClick={logout}>Logout</button>
            </DivBotoesHomePage>
        </DivAdminHomePage>
    )
}