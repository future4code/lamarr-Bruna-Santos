import React from "react";
import { DivBotoesLoginPage, DivLoginPage } from "./Styled";
import {useNavigate} from "react-router-dom"

export const LoginPage=()=>{
    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }

    const areaDoAdmin=()=>{
        navigate("/admin/trips/list")
    }



    return(
        <DivLoginPage>
            <h2>Login</h2>
            <input placeholder="E-mail"/>
            <input type="password" nome="senha"placeholder="Senha"/>
            <DivBotoesLoginPage>
                <button onClick={voltar}>Voltar</button>
                <button onClick={areaDoAdmin}>Entrar</button>
            </DivBotoesLoginPage>
        </DivLoginPage>
    )
}