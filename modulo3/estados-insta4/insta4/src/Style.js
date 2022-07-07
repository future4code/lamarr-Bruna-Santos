import styled from "styled-components";

/*     APP JS  */

export const MainContainer=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center
`

export const Header=styled.header`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid rgb(231, 230, 230);
    width: 95vw;
    height: 60px;
    p{
        font-family: 'Yellowtail', cursive;
        font-size: 30px;
        color: #14bff3;
        width: 333px;
    }
`

export const Titulo=styled.h1`
    color: #14bff3;
    font-family: sans-serif;
    font-size: 25px;
`

export const Input=styled.input`
    height: 36px;
    width: 236px;
    border-radius: 8px;
    border: none;
    background-color: #14bff3;
    padding: 0 20px;
    font-size: 15px;
    :focus-visible{
        border: none;
        outline: none;
    }
    ::placeholder{
        color:white;
    }
`

export const DivIcones=styled.div`
    display: flex;
`

export const Icones=styled.img`
    margin-left: 30px;
    width: 30px;
    height: 30px;

`

export const Imagem=styled.img`
    width: 30px;
`

export const Form=styled.form`
    margin-top: 5px;
`

export const InputUsuario=styled.input`
    width: 100px;
    height: 20px;
    margin-right: 5px;
    border: 2px solid #a9a1a180;
    border-radius: 5px;
    :hover{
        border: 2px solid #14bff3;
    }
    :focus-visible{
        border: 2px solid #14bff3;
        outline: none;
    }
    ::placeholder{
        background-color: white;
        padding: 5px;
    }
`

export const InputLink=styled.input`
    width: 200px;
    height: 20px;
    margin-right: 5px;
    border: 2px solid #a9a1a180;
    border-radius: 5px;
    :hover{
        border: 2px solid #14bff3;
    }
    :focus-visible{
        border: 2px solid #14bff3;
        outline: none;
    }
    ::placeholder{
        background-color: white;
        padding: 5px;
    }

`
export const Button=styled.button`
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 5px;
    background-color: #a9a1a180;
    color: gray;
    font-weight: bold;
    margin-top: 20px;
    font-size: 15px;
    :hover{
        background-color: #14bff3;
        border: none;
        color: white
    }
`

