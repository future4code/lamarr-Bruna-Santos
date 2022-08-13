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
    h2{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;
        color: #2d1687;
        
    }
    h1{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;
        color: #2d1687;

    }
    form{
        display: flex;
        flex-direction: column;

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
        :focus {
                color: #2d1687;
            }


    }

        select{
            margin-bottom: 10px;
            width: 20vw;
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