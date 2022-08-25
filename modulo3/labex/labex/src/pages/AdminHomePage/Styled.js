import styled from "styled-components";
import imagemBackgroundPainelAdm from '../img/background-paineladm.png'

export const DivListaDeViagens=styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;

    button:nth-child(1){
        font-family: 'Rajdhani', sans-serif;
        width: 15%;
        min-height: 5%;
        margin-bottom: 10px;
        font-size: 20px;
        cursor: pointer;
        transition: .5s ease-in ;
        color: #2d1687;
        background-color: white;
        border-radius: 10px;
        opacity: 0.6;
        border: 2px solid #2d1687;
        :hover{
            color: white;
            background-color: #2d1687;
            opacity: 1;
        }
        @media (max-width: 752px){
            min-width: 50%;
        }
    }
    button:nth-child(2){
        font-family: 'Rajdhani', sans-serif;
        width: 2%;
        margin-bottom: 10px;
        font-size: 20px;
        cursor: pointer;
        transition: .5s ease-in ;
        color: #2d1687;
        opacity: 0.6;
        border: none;
        background-color: transparent;
        :hover{
            color: #d13434;
            opacity: 1;
        }
    }
`


export const DivAdminHomePage=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    background-image: url(${imagemBackgroundPainelAdm});
    background-size: cover;

    h1, h2{
        font-family: 'Rajdhani', sans-serif;
        color: #2d1687;
        font-weight: bold;
        padding-bottom: 1%;
        @media (max-width: 650px){
            padding-bottom: 5%;
        }
    }
`

export const DivBotoesHomePage=styled.div`
    display: flex;
    @media (max-width: 650px){
        flex-direction: column;
    }
    button{
        margin-left: 10px;
        margin-bottom: 30px;
        width: 8vw;
        min-height: 4vh;
        border-radius: 10px;
        border: 2px solid black;
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color:#b9148e;
        cursor: pointer;
        transition: .5s ease-in-out ;

        @media (max-width: 650px){
            width: 50vw;
            height: 5vh;
            border-radius: 12px;
            margin-bottom: 10px;
            font-size: 23px;
        }
        @media (max-width: 222px){
            width: 60vw;
        }

        :hover{
            background-color: #b9148e;
            color: white;
            border: #b9148e;
        }
    }   
`