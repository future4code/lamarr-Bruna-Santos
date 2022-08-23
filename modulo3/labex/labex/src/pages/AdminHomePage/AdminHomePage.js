import React, { useEffect } from "react";
import { DivAdminHomePage, DivBotoesHomePage, DivListaDeViagens } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/UseRequestData";


export const AdminHomePage=()=>{
    const [listaViagens,isLoading] =useRequestData()
    const navigate=useNavigate();
    const viagemSelecionada=(id)=>{
        navigate(`/admin/trips/${id}`)
    }

    const componentesLista=listaViagens.map((item, index)=>{
        return(
            <DivListaDeViagens key={index} >
                <button onClick={()=>viagemSelecionada(item.id)}>{item.name}</button>
            </DivListaDeViagens>
        )
    })
    useProtectedPage()
    useEffect(()=>{
        const token = localStorage.getItem("token")
    }, [])


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
            {isLoading?
            <h1>Carregando...</h1>
            :
            <>
                <h1>Painel administrativo</h1>
                <DivBotoesHomePage>
                    <button onClick={voltar}>Voltar</button>
                    <button onClick={novaViagem}>Criar viagem</button>
                    <button onClick={logout}>Logout</button>
                </DivBotoesHomePage>
                <h2>Selecione uma viagem:</h2>
                <div>
                    {componentesLista}
                </div> 
            </>

}
        </DivAdminHomePage>
    )
}