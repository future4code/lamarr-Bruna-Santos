import styled from "styled-components";

export const MyProduct=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #F1A873;
    border-radius: 10px;
    padding: 10px;
    margin: 20px;
    font-family: sans-serif;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input{
        min-width: 2vw;
        margin-left: 20px;
        height: 2vh;
        padding-left: 5px;
    }
`

export const PriceStyled=styled.p`
    margin-left: 10px;
    font-weight: bold;
`

export const DivBotao=styled.div`
    display: flex;
    margin-right: 50px;
    
`