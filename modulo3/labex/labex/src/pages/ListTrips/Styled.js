import styled from "styled-components";
import imagemBackgroundViagens from '../img/background-viagens.png'


export const DivHome=styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100vw;
    min-height: 100vh;
    justify-content: center ;
    align-items: center;
    background-image: url(${imagemBackgroundViagens});
    background-size: cover;
    padding: 25px 0;

    h3{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;
        color: #2d1687;
        font-size: 25px;
    }
    h1{
        font-family: 'Rajdhani', sans-serif;
        padding-top: 2vh;
        color: #2d1687;
        font-weight: bold
    }
    @media (max-width: 920px){
        background-image: none;
        background-color: #F3F4F4;
    }

`

export const DivListaViagens=styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    border: 2px solid #2d1687;
    border-style: dashed;
    width: 20vw;
    min-height: 20vh;
    margin: 0 5px 10px 5px;
    background-color: white;
    flex: none;
/*     :hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        opacity: 1;
    } */

    @media (max-width: 650px){
        min-width: 75vw;
        min-height: 35vh;
    }
    @media (min-width: 750px) and (max-width: 920px){
        min-width: 60vw;
        min-height: 20vh;
    }
    @media (min-width: 1024px) and (max-width: 1280px){
        min-width: 40vw;
        min-height: 30vh;
    }


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
    
    span{
        font-weight: bolder;
    }
`

    export const DivCarrossel=styled.div`
    display: flex;
    max-width: 62vw;
    overflow-x: scroll;
    `



export const BotoesHome=styled.div`
    display: flex;
    button{
        margin: 10px 5px 0 5px;
        min-width: 8vw;
        border-radius: 10px;
        border: 2px solid #2d1687;
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color:#b9148e;
        padding: 10px 20px;
        cursor: pointer;
        transition: .5s ease-in-out ;

        @media (max-width: 500px){
            padding: 5px 10px;
        }
        :hover{
            background-color: #b9148e;
            color: white;
            border: #b9148e;
        }
    }
`

