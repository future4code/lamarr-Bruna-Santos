import React, { useEffect, useState } from "react";
import axios from "axios";

export const Labenusers = () =>{
    const [minhaLista, setMinhaLista]=useState([])
    const [nomeInput, setNomeInput]=useState()
    const [emailInput, setEmailInput]=useState()
    const [visualizarUsuarios, setVisualizarUsuarios]=useState(false)
    const [nomePesquisar, setNomePesquisar]=useState()

    const atualizarNome=(event)=>{
        setNomeInput(event.target.value)
    }

    const atualizarEmail=(event)=>{
        setEmailInput(event.target.value)
    }

    const pesquisarNome=(event)=>{
        setNomePesquisar(event.target.value)
    }

    const componentesLista=minhaLista.map((item, index)=>{

        return(
            <div key={index}>
                {item.name}
                {item.email}
                <button onClick={()=>deletarUsuario (item.id)}>x</button>
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

    const query={
        
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

    const deletarUsuario = (id) =>{
        axios.delete(`${url}/${id}`, meuHeader)
        .then(()=>{
            alert("Usuário removido com sucesso")
            getAllUsers()
        })

    }

    const searchUsers=()=>{
        axios.get(`${url}/search?name=${nomePesquisar}`, meuHeader)
        .then((response)=>{
            setMinhaLista(response.data)
        })
    }





    return(
        <div>
            <button onClick={()=>setVisualizarUsuarios(!visualizarUsuarios)}>Visualizar usuários</button>
            {visualizarUsuarios ? 
            <>
                {componentesLista}
                <h3>Procurar usuário</h3>
                <input type="text" value={nomePesquisar} onChange={pesquisarNome} placeholder="Nome exato para buscar"/>
                <button onClick={searchUsers}>Salvar edição</button>

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