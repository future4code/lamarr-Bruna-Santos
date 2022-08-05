import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonDelete, ButtonListaMatch, ButtonNao, ButtonSim, DivBotaoDeletar, DivBotoes, DivCard, DivDadosUsuario, DivImagemBio, DivLista, DivListaMatch, DivMae, DivNomeIdade, DivReturnMatch, UsuarioDeuMatch } from "./Style";
import ImagemDeletar from '../img/deletar.png'
import ImagemLista from '../img/list.png'

export const Astromatch = () =>{
    const [listaMatch, setListaMach]=useState([])
    const [deuMatch, setDeuMatch]=useState([])
    const [matchPage, setMatchPage]=useState(false)

    const listaPessoas=deuMatch?.map((item, index)=>{
        return(
            <DivLista key={index}>
                <img src={item.photo} alt="imagem do usuário"/>
                <p>{item.name}</p>
            </DivLista>
        )
    })

    //1: AXIOS:

    const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
    const meuHeader={
        headers:{
            Authorization: "bruna-carvalho-lamarr"
        }
    }

    const urlPost="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"

    const bodySim={
        "id": listaMatch.id,
        "choice": true
    }

    const bodyNao={
        "id": listaMatch.id,
        "choice": false
    }

    const urlMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"

    const urlClear ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
    

    const getProfileToChoose=()=>{
        axios.get(url, meuHeader).then((response)=>{
            setListaMach(response.data.profile);
        })
    }

    const choosePerson=(event)=>{
        event.preventDefault()
        axios.post(urlPost, bodySim, meuHeader).then(()=>{
            getProfileToChoose()
        })
        .catch(()=>{
        })
        setListaMach("")
    }

    const choosePersonNao=(event)=>{
        event.preventDefault()
        axios.post(urlPost, bodyNao, meuHeader).then(()=>{
            getProfileToChoose()
        })
        .catch(()=>{
        })
        setListaMach("")
    }

    const getMatches=(event)=>{
        event.preventDefault()
        setMatchPage(!matchPage)
        axios.get(urlMatches, meuHeader).then((response)=>{
            setDeuMatch(response.data.matches);
        })
    }

    const clear=(event)=>{
        event.preventDefault()
        axios.put(urlClear, meuHeader).then((response)=>{
            setDeuMatch(response.data.matches)
        })

    }

    // 2: use efect

    useEffect(()=>{
        getProfileToChoose()
    },[])

    
    return(
/*            3: o que vai ser renderizado, como ele já está em um objeto não precisa de map */
            <DivMae>
                <ButtonListaMatch src={ImagemLista} onClick={getMatches}/>
                {matchPage ? 
                <>  
                    <DivListaMatch>
                        {listaPessoas}
                    </DivListaMatch>
                    <DivBotaoDeletar>
                        <img src={ImagemDeletar} alt="imagem de uma lixeira" onClick={clear}/>
                    </DivBotaoDeletar>
                </>


                :
                <DivCard>
                    <DivImagemBio>
                        <img src={listaMatch.photo} alt="imagem do usuário"/>
                        <p>{listaMatch.bio}</p>
                    </DivImagemBio>
                    <DivDadosUsuario>
                        <p>{listaMatch.name},</p>
                        <p>{listaMatch.age}</p>
                    </DivDadosUsuario>
                    <DivBotoes>
                        <ButtonSim onClick={choosePerson}>Vai dar namoro!</ButtonSim>
                        <ButtonNao onClick={choosePersonNao}>Eu vou deixar para minha amiga!</ButtonNao>  
                    </DivBotoes>
                </DivCard>
                
                }
            </DivMae>

    )
}