import styled from "styled-components";

export const Header=styled.header`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    height: 10vh;
`

export const ImagemLogo=styled.img`
    width: 90px;
    height: 90px;
`

export const Logo =styled.p`
    font-family: sans-serif;
    font-size: 30px;
    font-weight: bolder;
`
export const Main= styled.main`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

export const Label=styled.label`
    font-weight: bold;
    margin-right: 5px;
`
export const Input=styled.input`
    margin-right: 5px;
    width: 200px;
    height: 20px;
`

export const Button=styled.button`
    width: 200px;
    height: 25px;
`

export const Footer=styled.footer`
    background-color: gray;
    position: fixed;
    width: 100vw;
    height: 5vh;
    bottom: 0;
    color:white;
    display: flex;
    justify-content: center;
`

export const Aside=styled.aside`
    background-color: orange;
    width: 10vw;

`
export const Div=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 85vh;
`
export const DivInput=styled.div`
    display: flex;
    margin-bottom: 20px;
`