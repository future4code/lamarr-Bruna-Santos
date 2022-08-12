import styled from "styled-components";
import imagemBackgroundViagens from '../img/background-viagens.png'


export const DivHome=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: flex-start ;
    align-items: center;
    background-image: url(${imagemBackgroundViagens});
    background-size: cover;
    h1{
        font-family: 'Rajdhani', sans-serif;
        padding-top: 2vh;
        color: #2d1687;
        font-weight: bold;

    }
`

export const DivListaViagens=styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    border: 2px solid #2d1687;
    border-style: dashed;
    width: 20vw;
    min-height: 20vh;
    margin-bottom: 10px;
    background-color: white;

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Rajdhani', sans-serif;
        color: #b9148e;
        padding: 2%;
    }

    p{
        font-family: 'Figtree', sans-serif;
        padding: 1% 2%;
        text-align: justify;
        color: gray;
    }
`

export const DivPlaneta=styled.div`
    display: flex;
`
export const BotoesHome=styled.div`
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

