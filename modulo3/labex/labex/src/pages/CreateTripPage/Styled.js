import styled from "styled-components";
import imagemBackgroundCriarViagens from '../img/background-criar-viagens.png'


export const DivCriarPaginas=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url(${imagemBackgroundCriarViagens});
    background-size: cover;

    h1{
        font-family: 'Rajdhani', sans-serif;
        color: #2d1687;
        font-weight: bold;
        padding-bottom: 1%;        
    }

    form{
        display: flex;
        flex-direction: column;
        @media (max-width: 650px){
            width: 82%;
        }
    }

    input{
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid #b9148e;
        width: 20vw;
        height: 3vh;
        outline: none;
        color: gray;
        font-size: 16px;
        font-family: 'Rajdhani', sans-serif;
        padding: 3px;
        @media (max-width: 650px){
            width: 80vw;
        }
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

    select{
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid #b9148e;
        min-width: 20.5vw;
        height: 4vh;
        outline: none;
        color: gray;
        font-size: 16px;
        font-family: 'Rajdhani', sans-serif;
        padding: 3px;
        @media (max-width: 650px){
            font-size: 18px;
            height: 5vh;
            }
        :focus {
                color: #2d1687;
            }
        ::placeholder{
            padding: 5px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 16px
            
        }

    }
`

export const DivBotoesCriarViagem=styled.div`
    display: flex;
    justify-content: center;
    button, div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 2px;
        width: 10vw;
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
            width: 40vw;
            height: 5vh;
            border-radius: 12px;
            font-size: 22px;
            margin-top: 5%;
        }

        :hover{
            background-color: #b9148e;
            color: white;
            border: #b9148e;
        }
    } 
`
