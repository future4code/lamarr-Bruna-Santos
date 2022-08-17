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
            <h1>Login</h1>
            <form onSubmit={areaDoAdmin}>
                <input
                placeholder="E-mail"
                type="email"
                required
                />
                <input 
                placeholder="Senha"
                type="password"
                required
                pattern="^.{6,}$" //padrão Regex
                title="mínimo de 6 caracteres"
                />
                <DivBotoesLoginPage>
                    <button onClick={voltar}>Voltar</button>
                    <button type="submit">Entrar</button>
                </DivBotoesLoginPage>
            </form>
        </DivLoginPage>
    )
}