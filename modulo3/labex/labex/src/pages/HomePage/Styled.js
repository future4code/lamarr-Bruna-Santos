import styled from "styled-components";
import imagemBackgroundOpacity from '../img/background-opacity.png'


export const DivBackground=styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url(${imagemBackgroundOpacity});
    background-size: cover;
    align-items: center;
    justify-content: center;
`

export const DivHomePage=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    opacity: 0.4;
    :hover{
        opacity: 1;
    }
    h1{
        color: white;
        font-size: 50px;
        font-family: 'Rajdhani', sans-serif;
        
    }
   
`

export const DivBotoesHomePage=styled.div`
    display: flex;
    flex-direction: row;
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