import styled from "styled-components";
export const Header=styled.header`
    height: 5vh;
    background-color: #4eb34e8f;
    span{
        display: flex;
        justify-content: flex-end;
        font-weight: bold;
        margin-right: 50px;
        font-size: 30px;
        color:green;
    }
`
export const Main=styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Conversa=styled.div`
    border: 4px solid #4eb34e8f;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 35vw;
    height: 90vh;
    margin-top: 20px;
    padding-bottom: 10px;

`

export const Div=styled.div`
    width: 100%;
`

export const Mensagens=styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px 10px;
    margin: 15px 5px;
    background-color: #95dd955e;
    border-radius: 8px;
    border-top-right-radius: 0;

`

export const DivRemetente=styled.div`
    display: flex;
    justify-content: start;
    align-items: flex-start;

`

export const MensagensRemetente=styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    margin: 10px 5px;
    background-color: #fbfb9fc9;
    border-radius: 10px;
    border-top-left-radius: 0;
    width: auto;
    height: auto;
`
export const Remetente=styled.p`
    font-weight: bold;
    margin-right: 20px;
    color:gray;
    font-size: 15px;
`

export const Texto=styled.p`
    margin-right: 20px;
    word-break: break-all;
    color:gray;
    font-size: 15px;
    margin-top: -10px;
`
export const TextoEu=styled.p`
    margin-right: 20px;
    word-break: break-all;
    color:gray;
    font-size: 15px;
`


export const DivEu=styled.div`
    display: flex;
    justify-content: end;
    align-items: flex-end;

`

export const Botoes=styled.div`
    width: 35vw;
    display: flex;
`
export const Input=styled.input`
    width: 10vw;
    height: 20px;
    margin: 5px 5px 0 0;
    border: 2px solid #4eb34e8f;
    outline: none;
    :hover{
        border: 2px solid green;
    }
    :active{
        border: 2px solid green;
    }
`
export const InputMensagem=styled.input`
    width: 25vw;
    height: 20px;
    margin: 5px 5px 0 0;
    border: 2px solid #4eb34e8f;
    outline: none;
    :hover{
        border: 2px solid green;
    }
    :active{
        border: 2px solid green;
    }


`
export const Button=styled.button`
    width: 5vw;
    height: 25px;
    margin-top: 5px;
    border: 2px solid #4eb34e8f;
    :hover{
        background-color: #4eb34e8f;
        color: white;
    }




`



