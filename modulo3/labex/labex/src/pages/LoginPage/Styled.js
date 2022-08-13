import styled from "styled-components";
import imagemBackgroundLogin from '../img/background-login.png'

export const DivLoginPage=styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    background-image: url(${imagemBackgroundLogin});
    background-size: cover;

    h1{
        font-family: 'Rajdhani', sans-serif;
        color: #2d1687;
        font-weight: bold;
        padding-bottom: 1%
    }

    input{
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid #b9148e;
        height: 3vh;
        width: 20%;
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

export const DivBotoesLoginPage=styled.div`
    display: flex;
    button{
        margin: 0 5px;
        width: 9.5vw;
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
