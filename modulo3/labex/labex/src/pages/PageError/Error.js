import React from "react"
import { useNavigate } from "react-router-dom";
import { DivError } from "./Styled"

export const PageError=()=>{
    const navigate=useNavigate();

    const pageHome=()=>{
        navigate("/")
    }

    return(
        <DivError>
            <button onClick={pageHome}>Menu Inicial</button>
        </DivError>
    )
}
