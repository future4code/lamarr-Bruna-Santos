import styled from "styled-components";

export const DivMae=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90vh;
    background-color: #ffffeb;
`

export const DivCard=styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 75vh;
    border: 3px solid #00abfd;


`

export const DivImagemBio=styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: auto;
        height: 60vh;
        padding: 5px;
    }

    p{
        margin: 5px;
        font-family: 'Rajdhani', sans-serif;
        font-weight: bold;
        font-size: 18px;
        

    }

`
export const DivDadosUsuario=styled.div`
    display: flex;

    p{
        font-family: 'Rajdhani', sans-serif;
        margin: 5px;
        font-size: 20px;
        font-weight: bold;
        color: #00abfd;

    }
`
