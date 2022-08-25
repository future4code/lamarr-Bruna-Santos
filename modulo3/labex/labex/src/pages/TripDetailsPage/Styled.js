import styled from 'styled-components'
import imagemBackgroundDetalhesDaViagem from '../img/background-detalhes-das-viagens.png'


export const DivListaDeViagens=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;
    min-height: 100vh;  
    background-image: url(${imagemBackgroundDetalhesDaViagem});
    background-size: cover;

    h1{
        font-family: 'Rajdhani', sans-serif;
        padding: 2vh 0;
        color: #2d1687;
        font-weight: bold;
        text-align: center;   
    }

    h2{
        font-family: 'Rajdhani', sans-serif;
        padding: 1vh 0;
        color: #2d1687;
        font-weight: bold;
        text-align: center; 
    }

    p{
        font-family: 'Figtree', sans-serif;
        text-align: justify;
        color: gray;
        padding: 0 5% 1% 5%;
        font-size: 18px;

    }

    button{
        min-width: 8vw;
        border-radius: 10px;
        border: 2px solid black;
        margin: 20px 0;
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color:#b9148e;
        padding: 3px 10px;
        cursor: pointer;
        transition: .5s ease-in-out ;
        @media (max-width: 650px){
            width: 40vw;
            height: 5vh;
        }

        :hover{
            background-color: #b9148e;
            color: white;
            border: #b9148e;
        }
    }
`

export const NomeAprovados=styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Figtree', sans-serif;
    text-align: justify;
    justify-content: baseline;
    color: gray;
    font-size: 18px;
    width: 20%;
    padding-left: 12%;

`

export const DivDetalhesFesta=styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    min-height: 20vh;
    border: 2px solid black;

    h2{
        font-family: 'Rajdhani', sans-serif;
        padding: 1vh 0;
        color: #2d1687;
        font-weight: bold;
        text-align: center;
    }

    span{
        font-weight: bolder;
    }

    p{
        font-family: 'Figtree', sans-serif;
        text-align: justify;
        color: gray;
        padding: 0 5% 1% 5%;
        font-size: 18px;

    }
`

export const DivDetalhesCandidatos=styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    min-height: 20vh;
    border: 2px solid black;
    padding-top: 1vw;
    margin-bottom: 1%;
    border: 2px dotted #2d1687;
    span{
        font-weight: bolder;
    }

    p{
        font-family: 'Figtree', sans-serif;
        text-align: justify;
        color: gray;
        padding: 0 5% 1% 5%;
    }
`

export const DivBotoesCandidato=styled.div`
    display: flex;
    justify-content: center;
    padding: 2% 0;
    button{
        min-width: 25%;
        margin: 0 2%;
        border-radius: 5px;
        font-family: 'Rajdhani', sans-serif;
        font-size: 18px;
        cursor: pointer;
        transition: .5s ease-in ;
        color: #2d1687;
        background-color: white;
        border-radius: 10px;
        opacity: 0.6;
        border: 2px solid #2d1687;
        :hover:nth-child(1){
            color: green;
            background-color: #85dd80;
            opacity: 1;
            border: 2px solid #85dd80;
        }   
        :hover:nth-child(2){
            color: red;
            background-color: #e39b9b;
            opacity: 1;
            border: 2px solid #e39b9b;

        } 
    }

`