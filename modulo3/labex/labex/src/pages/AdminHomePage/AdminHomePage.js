import React, { useState } from "react";
import { DivAdminHomePage, DivBotoesHomePage, DivListaDeViagens} from "./Styled";
import {useNavigate} from "react-router-dom"
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/UseRequestData";
import axios from "axios";
import { BiTrash } from 'react-icons/bi'
import { Modal } from "../Modal/Modal";

export const AdminHomePage=()=>{
    useProtectedPage()
    const [listaViagens,isLoading] =useRequestData()
    const [tripId, setTripId]=useState()

    const navigate=useNavigate();
    const viagemSelecionada=(id)=>{
        navigate(`/admin/trips/${id}`)
    }
    const [isModalVisible, setIsModalVisible]=useState(false)


    const componentesLista=listaViagens.map((item, index)=>{
        return(
            <DivListaDeViagens key={index} >
                <button onClick={()=>viagemSelecionada(item.id)}>{item.name}</button>
                <button onClick={()=>{
                    setTripId(item.id)
                    setIsModalVisible(true)}}><BiTrash size="25px"/></button>

            </DivListaDeViagens>
        )

    })
        const token = localStorage.getItem("token")
        const headers ={
            headers:{
                Auth: token
            }
        }
    const deletarViagem=(id)=>{
        const urlDelete=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips/${id}`

        axios.delete(urlDelete, headers)
    }

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
            {isModalVisible&& (
            <Modal tripId={tripId} onClose={()=> setIsModalVisible(false)} deletarViagem={deletarViagem}>
            </Modal>
            )}
        </DivAdminHomePage>
    )
}