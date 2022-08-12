import styled from "styled-components";

export const DivCriarPaginas=styled.div`
    display: flex;
    flex-direction: column;
    width: 98vw;
    height: 98vh;
    justify-content: center;
    align-items: center;

    h2{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;        
    }

    form{
        display: flex;
        flex-direction: column;
    }

    input, select{
        width: 20vw;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 2px solid #b9148e;
        height: 3vh;
        outline: none;
        ::placeholder{
            padding: 5px;
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
