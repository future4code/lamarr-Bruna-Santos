import React, { useState } from "react";
import { DivBotoesLoginPage, DivCarregando, DivLoginPage } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useForm } from "../../Hooks/UseForm";
import axios from "axios"
import { CircularProgress } from "@mui/material";

export const LoginPage=()=>{
    const navigate=useNavigate();

    const [formulario, onChange] = useForm({email: "", password: "" })
    const [isLoading, setIsLoading]=useState(false)

    const logar =(event)=>{
        setIsLoading(true)
        event.preventDefault()
        

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/login", 
        formulario)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/list")
        }).catch((error)=>{
            alert("Usuário não localizado")
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <DivLoginPage>
            {isLoading?
            <DivCarregando>
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
            </DivCarregando>
           :
            <>
                <h1>Login</h1>
                <form onSubmit={logar}>
                    <input
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                    value={formulario.email}
                    onChange={onChange}
                    />

                    <input 
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                    pattern="^.{6,}$" //padrão Regex
                    title="mínimo de 6 caracteres"
                    onChange={onChange}
                    value={formulario.password}
                    />
                    <DivBotoesLoginPage>
                        <button onClick={voltar}>Voltar</button>
                        <button type="submit">Entrar</button>
                    </DivBotoesLoginPage>
                </form>
            </>
}
        </DivLoginPage>
    )
}