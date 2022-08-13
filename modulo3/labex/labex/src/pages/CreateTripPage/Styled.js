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
        :focus {
                color: #2d1687;
            }
        ::placeholder{
            padding: 5px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 16px;
            
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
        :focus {
                color: #2d1687;
            }
        ::placeholder{
            padding: 5px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 16px;
            
        }

    }
`





export const DivBotoesCriarViagem=styled.div`
    display: flex;
    button{
        margin-left: 10px;
        width: 8vw;
        height: 4vh;
        border-radius: 10px;
        border: 2px solid black;
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color:#b9148e;
        cursor: pointer;

        :hover{
            background-color: #b9148e;
            color: white;
            border: #b9148e;
        }
    } 
`
