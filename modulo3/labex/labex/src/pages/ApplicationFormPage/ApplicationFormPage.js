import React, { useState } from "react";
import { DivBotoesFormulario, DivFormulario } from "./Styled";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../../Hooks/UseRequestData";
import axios from "axios";
import { paises } from '../../MockDeDados/Paises'


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
            console.log(formularioCandidato)
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
                <h1>Inscreva-se para uma viagem</h1>
                <form onSubmit={formularioCandidato}>
                    <select required>
                    <option value={""} type="Select">Selecione sua viagem</option>
                        {listaViagens.map((item, index)=> <option value={item.name} key={index}>{item.name}</option>)}
                    </select>
                    <input 
                    placeholder="Nome" 
                    value={nameInput}
                    type="name"
                    pattern="^[A-Za-z].{3,}$"
                    title="Mínimo de 4 letras."
                    required
                    />
                    <input 
                    placeholder="Idade" 
                    value={idadeInput} 
                    required
                    type="number"
                    min={18}

                    />
                    <textarea 
                    placeholder="Texto de candidatura" 
                    value={textoInput}
                    required
                    type="text"
                    minLength={20}

                    />
                    <input placeholder="Profissão" 
                    value={profissaoInput}
                    type="text"
                    required
                    pattern="^[A-Za-z].{10,}$"
                    title="Mínimo de 10 letras."
        
                    />
                    <select required>
                        <option value={""} type="Select">Selecione o seu país</option>
                        {paises.map((item, index)=> <option value={item} key={index}>{item}</option>)}

                    </select>
                    <DivBotoesFormulario>
                        <button onClick={voltar}>Voltar</button>
                        <button type="submit">Enviar</button>
                    </DivBotoesFormulario>
                </form>
            </>
}
        </DivFormulario>
    )


}
