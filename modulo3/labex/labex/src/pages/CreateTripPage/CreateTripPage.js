import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { DivBotoesCriarViagem, DivCriarPaginas } from "./Styled";
import { planetas } from '../../MockDeDados/Planetas'


export const CreateTripPage=()=>{
    const [nome, setNome]=useState()
    const [planeta, setPlaneta]=useState()
    const [data, setData]=useState()
    const [descricao, setDescricao]=useState()
    const [duracao, setDuracao]=useState()

    const urlCriarViagem="https://us-central1-labenu-apis.cloudfunctions.net/labeX/Bruna-carvalho-lamarr/trips"
    const bodyCriarViagem={
        "name":{nome},
        "planet":{planeta},
        "date":{data},
        "description":{descricao},
        "durationInDays":{duracao}
        }
    const navigate=useNavigate();

    const voltar=()=>{
        navigate(-1)
    }


    return(
        <DivCriarPaginas>
            <h1>CRIAR VIAGENS</h1>
            <form>
                <input 
                placeholder="Nome"
                type="name"
                required
                pattern="^[A-Za-z].{4,}$"
                title="Mínimo de 5 letras."
                />
                <select required>
                    <option type="Selection" value={""}>Escolha um planeta</option>
                    {planetas.map((item, index)=> <option value={item} key={index}>{item}</option>)}
                </select>
                <input
                placeholder="dd/mm/aaaa"
                type="date"
                required
                pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
                title="Informe a data no modelo: dd/mm/aaaa"
                />
                <input 
                placeholder="Descrição"
                type="text"
                required
                pattern="^[A-Za-z].{29,}$"
                title="Mínimo de 30 letras."
                />
                <input 
                placeholder="Duração em dias"
                type="number"
                min="30"
                required
                
                />
                <DivBotoesCriarViagem>
                    <button onClick={voltar}>Voltar</button>
                    <button>Criar</button>
                </DivBotoesCriarViagem>
            </form>



        </DivCriarPaginas>
    )
}