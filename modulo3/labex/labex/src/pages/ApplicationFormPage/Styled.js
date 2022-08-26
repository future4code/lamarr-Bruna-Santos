import styled from "styled-components";
import imagemBackgroundFormulario from '../img/background-formulario.png'

export const DivFormulario=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-image: url(${imagemBackgroundFormulario});
    background-size: cover;
    @media (max-width: 920px){
        background-image: none;
        background-color: #F3F4F4;
    }


    h2{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;
        color: #2d1687;
        
    }
    h1{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;
        color: #2d1687;
        @media (max-width: 650px){
            text-align: end;
            padding-right: 10%;            
        }

    }
    form{
        display: flex;
        flex-direction: column;
        @media (max-width: 650px){
            min-width: 80%;
        }

    input {
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid #b9148e;
        height: 3vh;
        outline: none;
        color: gray;
        font-size: 16px;
        font-family: 'Rajdhani', sans-serif;
        padding: 3px;
        :focus {
                color: #2d1687;
            }
        ::placeholder{
            padding: 5px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 16px;
            @media (max-width: 650px){
                font-size: 18px;
        }
        } 
    }

    textarea{
        border: 2px solid #b9148e;
        margin-bottom: 10px;
        border-radius: 5px;
        font-family: 'Rajdhani', sans-serif;
        padding: 5px;
        font-size: 16px;
        outline: none;
        color: gray;
        @media (max-width: 650px){
            font-size: 18px;
        }
        :focus {
                color: #2d1687;
            }
    }

        select{
            margin-bottom: 10px;
            width: 22vw;
            height: 3.5vh;
            border-radius: 5px;
            border: 2px solid #b9148e;
            outline: none;
            font-size: 16px;
            font-family: 'Rajdhani', sans-serif;
            color: gray;
            cursor: pointer;
            :focus {
                color: #2d1687;
            }
            @media (max-width: 650px){
                min-width: 80vw;
                min-height: 5vh;
                font-size: 18px;
        }
        }
    }

`
export const DivBotoesFormulario=styled.div`
    display: flex;

    button, div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        width: 10.5vw;
        min-height: 4vh;
        border-radius: 10px;
        border: 2px solid gray;
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color:#b9148e;
        cursor: pointer;
        transition: .5s ease-in-out ;
        :hover{
            background-color: #b9148e;
            color: white;
            border: #b9148e;
        }

        @media (max-width: 650px){
            min-width: 38vw;
            min-height: 4.5vh;
        }
        }
`
