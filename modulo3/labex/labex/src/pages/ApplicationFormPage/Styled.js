import styled from "styled-components";
import imagemBackgroundFormulario from '../img/background-formulario.png'


export const DivFormulario=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${imagemBackgroundFormulario});
    background-size: cover;
    h1{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;
        color: #2d1687;

    }
    form{
        display: flex;
        flex-direction: column;

    input{
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid #b9148e;
        height: 3vh;
        outline: none;
        ::placeholder{
            padding: 5px;
        }
    }

        select{
            margin-bottom: 10px;
            width: 20vw;
            height: 3vh;
            border-radius: 5px;
            border: 2px solid #b9148e;
            outline: none;
        }
    }

`

export const DivBotoesFormulario=styled.div`
    display: flex;

    button{
        margin-left: 5px;
        width: 10vw;
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