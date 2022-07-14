import styled from "styled-components";

export const H1=styled.h1`
    color: orange;
    margin: 20px 0 30px 0;
    font-size: 30px;

`

export const Label=styled.label`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #ff0099;
`

export const Input=styled.input`
    margin-bottom: 15px;
    border: 2px solid orange;
    border-radius: 5px;
    height: 30px;
    width: 400px;
    outline: none;
    :hover{
        border: 2px solid pink;
    }
    :active{
        border: 2px solid pink;
    }

`

export const Select=styled.select`
    height: 30px;
    width: 400px;
    border: 2px solid orange;
    border-radius: 5px;
    text-align: center;
    font-size: 15px;
    color: gray;
    outline: none;
    :hover{
        border: 2px solid pink;
    }
    :active{
        border: 2px solid pink;
    }
`

export const Option=styled.option`
    font-size: 15px;
    color: gray;


`

// AGRADECIMENTO:

export const Paragrafo=styled.p`
    font-size: 30px;
    color: orange;
    font-weight: bold;
`

export const Button=styled.button`
    height: 30px;
    width: 300px;
    margin-top: 30px;
    border: 2px solid orange;
    border-radius: 5px;
    background-color: white;
    color: #ff0099;
    font-weight: bold;
    font-size: 15px;
    outline: none;
    :hover{
        background-color: orange;
        color: white;
    }
`

