import React, { useEffect, useState } from "react";
import axios from "axios";
import { DivCard, DivDadosUsuario, DivImagemBio, DivMae } from "./Style";

export const Astromatch = () =>{
    const [listaMatch, setListaMach]=useState([])

    //1: AXIOS:

    const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
    const meuHeader={
        headers:{
            Authorization: "bruna-carvalho-lamarr"
        }
    }

    const getProfileToChoose=()=>{
        axios.get(url, meuHeader).then((response)=>{
            setListaMach(response.data.profile);
        })
    }

    // 2: use efect

    useEffect(()=>{
        getProfileToChoose()
    },[])


    
    return(
/*            3: o que vai ser renderizado, como ele já está em um objeto não precisa de map */
            <DivMae>
                <DivCard>
                    <DivImagemBio>
                        <img src={listaMatch.photo} alt="imagem do usuário"/>
                        <p>{listaMatch.bio}</p>
                    </DivImagemBio>
                    <DivDadosUsuario>
                        <p>{listaMatch.name},</p>
                        <p>{listaMatch.age}</p>
                    </DivDadosUsuario>

                </DivCard>
            </DivMae>

    )
}