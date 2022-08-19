import React from "react";
import { DivBotoesLoginPage, DivLoginPage } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useForm } from "../../Hooks/UseForm";
import axios from "axios"

export const LoginPage=()=>{
    const navigate=useNavigate();

    const [formulario, onChange] = useForm({email: "", password: "" })

    const logar =(event)=>{
        event.preventDefault()

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/login", 
        formulario)
        .then((response)=>{
            localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/list")
        }).
        catch((error)=> alert("Usuário não autorizado"))
    }

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <DivLoginPage>
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
        </DivLoginPage>
    )
}