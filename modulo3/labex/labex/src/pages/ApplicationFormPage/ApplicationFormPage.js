import React, { useState } from "react";
import { DivBotoesFormulario, DivFormulario } from "./Styled";
import {useNavigate, useParams} from "react-router-dom"
import { useRequestData } from "../../Hooks/UseRequestData";
import axios from "axios";
import { paises } from '../../MockDeDados/Paises'
import { useForm } from "../../Hooks/UseForm";


export const ApplicationFormPage=()=>{
    const [formulario, onChange] = useForm({name: "", age: "", applicationText:"", profession:"", country:"", planet:""})

    const [listaDeCandidato, setListaDeCandidato]=useState([])
    const [listaViagens, isLoading]=useRequestData()



    const formularioCandidato=(event)=>{
        event.preventDefault()
        console.log(formulario)
        const urlFormulario=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips/${formulario.planet}/apply`
        axios.post(urlFormulario, formulario).then((response)=>{
            setListaDeCandidato()
            alert("usuario cadastrado com sucesso")
            console.log(formulario)
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
                    <select required value={formulario.planet} onChange={onChange} name="planet" >
                    <option value={""} type="Select">Selecione sua viagem</option>
                        {listaViagens.map((item, index)=> <option value={item.id} key={index}>{item.name}</option>)}
                    </select>
                    <input 
                    name="name"
                    placeholder="Nome" 
                    value={formulario.name}
                    onChange={onChange}
                    type="name"
                    pattern="^[A-Za-z].{3,}$"
                    title="Mínimo de 4 letras."
                    required
                    />
                    <input 
                    name="age"
                    placeholder="Idade" 
                    value={formulario.age} 
                    onChange={onChange}
                    required
                    type="number"
                    min={18}

                    />
                    <textarea 
                    name="applicationText"
                    placeholder="Texto de candidatura" 
                    value={formulario.applicationText}
                    onChange={onChange}
                    required
                    type="text"
                    minLength={20}

                    />
                    <input placeholder="Profissão" 
                    name="profession"
                    value={formulario.profession}
                    onChange={onChange}
                    type="text"
                    required
                    pattern="^[A-Za-z].{10,}$"
                    title="Mínimo de 10 letras."
        
                    />
                    <select required value={formulario.country} name="country" onChange={onChange}>
                        <option value={""} type="Select">Selecione o seu país</option>
                        {paises.map((item, index)=> <option value={item} key={index}>{item}</option>)}

                    </select>
                    <DivBotoesFormulario>
                        <div onClick={voltar}>Voltar</div>
                        <button type="submit">Enviar</button>
                    </DivBotoesFormulario>
                </form>
            </>
}
        </DivFormulario>
    )


}
