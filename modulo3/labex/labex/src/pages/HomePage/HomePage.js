import React from "react";
import { DivBotoesHomePage, DivHomePage } from "./Styled";
import {useNavigate} from "react-router-dom"

export const HomePage=()=>{

    const navigate=useNavigate();

    const pageAreaDoAdmin=()=>{
        navigate("/login")
    }

    const pageListaDeViagens=()=>{
        navigate("/trips/list")
    }
    return(
        <DivHomePage>
            <h1>LabeX</h1>
            <DivBotoesHomePage>
                <button onClick={pageListaDeViagens}>Viagens</button>
                <button onClick={pageAreaDoAdmin}>Área do Admin</button>
            </DivBotoesHomePage>
        </DivHomePage>
    )

}