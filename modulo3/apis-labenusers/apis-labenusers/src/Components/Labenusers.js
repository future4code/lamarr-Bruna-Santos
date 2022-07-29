import React, { useEffect, useState } from "react";
import axios from "axios";

export const Labenusers = () =>{
    const [minhaLista, setMinhaLista]=useState([])
    const [nomeInput, setNomeInput]=useState()
    const [emailInput, setEmailInput]=useState()
    const [visualizarUsuarios, setVisualizarUsuarios]=useState(false)

    const atualizarNome=(event)=>{
        setNomeInput(event.target.value)
    }

    const atualizarEmail=(event)=>{
        setEmailInput(event.target.value)
    }

    const componentesLista=minhaLista.map((item, index)=>{
        return(
            <div key={index}>
                {item.name}
                {item.email}
            </div>
        )
    })



    useEffect(()=>{
        getAllUsers()
    },[]
    )

    const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const meuHeader={
        headers:{
            Authorization: "bruna-carvalho-lamarr"
        }
    }
    const body={
        "name": nomeInput,
        "email": emailInput
    }

    const getAllUsers=()=>{
        axios.get(url, meuHeader).then((response)=>{
            setMinhaLista(response.data)
            
        })

    }

    const createUser=(event)=>{
        event.preventDefault()
        axios.post(url, body, meuHeader).then(()=>{
            getAllUsers()
            alert("Usuário cadastrado com sucesso")
        })
        .catch(()=>{
            alert("Usuário não cadastrado, revise os dados inseridos")
        })
        setMinhaLista("")
    }





    return(
        <div>
            <button onClick={()=>setVisualizarUsuarios(!visualizarUsuarios)}>Visualizar usuários</button>
            {visualizarUsuarios ? 
            <>
                {componentesLista}
                <h3>Procurar usuário</h3>
                <input placeholder="Nome exato para buscar"/>
                <button>Salvar edição</button>

            </>
            :
            <div>  
                <input type="text" value={nomeInput} onChange={atualizarNome} placeholder="Nome"></input>
                <input  type="text" value={emailInput} onChange={atualizarEmail} placeholder="Email"></input>
                <button onClick={createUser}>Criar usuário</button>
            </div>
}
        </div>

    )
}