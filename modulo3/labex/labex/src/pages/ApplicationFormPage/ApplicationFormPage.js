import React, { useState } from "react";
import { DivBotoesFormulario, DivFormulario } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../../Hooks/UseRequestData";
import axios from "axios";


export const ApplicationFormPage=()=>{
    const [listaDeCandidato, setListaDeCandidato]=useState([])
    const [nameInput, setNameInput]=useState()
    const [idadeInput, setIdadeInput]=useState()
    const [textoInput, setTextoInput]=useState()
    const [profissaoInput, setProfissaoInput]=useState()
    const [paisInput, setPaisInput]=useState()
    const [nomeViagem, setNomeViagem]=useState()

    const [listaViagens, isLoading]=useRequestData()


    const url='https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips/1AkvKy7K8omPZqRn9EHS/apply'
    const body={
        "name":{nameInput},
        "age": {idadeInput},
        "applicationText":{textoInput},
        "profession":{profissaoInput},
        "country":{paisInput}
    }

    const formularioCandidato=()=>{
        axios.post(url, body).then((response)=>{
            setListaDeCandidato()
            alert("usuario cadastrado com sucesso")
        })
        .catch(()=>{
            alert("usuario não cadastrado")
        })

    }

    

    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <DivFormulario>
            {isLoading ? 
            <h2>Carregando....</h2>
            :
            <>
            <useRequestData/>
                <h1>Inscreva-se para uma viagem</h1>
                <form>
                    <select>
                        <option>Escolha uma viagem</option>
                        {listaViagens.map((item, index)=> <option value={item.name} key={index}>{item.name}</option>)}                 
                    </select>
                    <input placeholder="Nome" value={nameInput}/>
                    <input placeholder="Idade" value={idadeInput}/>
                    <textarea placeholder="Texto de candidatura" value={textoInput}/>
                    <input placeholder="Profissão" value={profissaoInput}/>
                    <select>
                        <option value={paisInput}>Selecione o seu país</option>
                    </select>
                </form>
                <DivBotoesFormulario>
                    <button onClick={voltar}>Voltar</button>
                    <button onClick={formularioCandidato}>Enviar</button>
                </DivBotoesFormulario>
            </>
}
        </DivFormulario>
    )


}
