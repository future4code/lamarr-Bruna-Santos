import styled from "styled-components";

export const DivAdminHomePage=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 98vh;
    width: 98vw;
    h2{
        font-family: 'Rajdhani', sans-serif;
        margin-bottom: 10px;
    }
`

export const DivBotoesHomePage=styled.div`
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