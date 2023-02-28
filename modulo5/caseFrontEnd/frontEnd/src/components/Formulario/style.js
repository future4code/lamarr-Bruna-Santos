import styled from "styled-components";

export const MyButton = styled.button`
    border-radius: 10px;
    width: 10%;
    height: 30px;
    background-color: white;
    border: 2px solid #F1A873;
    color: #e95600;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    :hover{
        background-color: #F1A873;
        border: none;
        color: #e95600;
        font-size: 16px;
        font-weight: bold;
    }
`

export const MyForm = styled.form`

    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: 2px solid #F1A873;
        border-radius: 10px;
        padding: 10px;
        margin: 20px;
        font-family: sans-serif;
    }

    div:hover{
        border: 2px solid orange;

    }

    input{
        width: 20vw;
        height: 3vh;
        border: 2px solid orange;
        font-size: 20px;
        padding: 0 10px;
        color: #e95600;
        font-size: 16px;
        font-weight: bold;
    }

    input:active{
        border: 2px solid orange;
    }

    p{
        font-weight: bold;
        color: #e95600;
        font-size: 18px;
    }
`
export const MyClient = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F1A873;
    color: white;

    h2{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        padding-left: 45%;
    }
    
`