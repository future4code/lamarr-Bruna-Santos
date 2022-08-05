import styled from "styled-components";

export const DivMae=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    height: 93vh;
    background-color: #ffffeb;
    
`

export const DivCard=styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 80vh;
    border: 3px solid #00abfd;
    border-radius: 15px;
    margin-top: 2%;
    margin-left: 1%;

`

export const DivImagemBio=styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: auto;
        height: 60vh;
        padding: 5px;
        border-radius: 15px;
    }

    p{
        margin: 5px;
        font-family: 'Rajdhani', sans-serif;
        font-weight: bold;
        font-size: 22px;
        

    }

`
export const DivDadosUsuario=styled.div`
    display: flex;

    p{
        font-family: 'Rajdhani', sans-serif;
        margin: 15px;
        font-size: 30px;
        font-weight: bold;
        color: #00abfd;

    }
`

export const DivBotoes=styled.div` 
    display: flex;
    justify-content: center;
`

export const ButtonSim=styled.button`
        width: 20vw;
        margin: 15px;
        background-color: white;
        border: 2px solid #8723e3;
        border-radius: 10px;
        color: #750a7c;
        font-weight: bold;
        font-family: 'Secular One', sans-serif;
        font-size: 20px;
        cursor: pointer;
        outline: none;
        :hover{
            background-color: #0ca7099e;
            color: #01520b;
            border: 2px solid #0ca7099e
        }
        :active{
            background-color: #0ca7099e;
            color: #01520b;
            border: 2px solid #0ca7099e
        }

`

export const ButtonNao=styled.button`
        width: 20vw;
        margin: 15px;
        background-color: white;
        border: 2px solid #8723e3;
        border-radius: 10px;
        color: #750a7c;
        font-weight: bold;
        font-family: 'Secular One', sans-serif;
        font-size: 20px;
        cursor:pointer;
        :hover{
            background-color: #f5a3a3;
            color: #c94949;
            border: 2px solid #f5a3a3
        }
        :active{
            background-color: #f5a3a3;
            color: #c94949;
            border: 2px solid #f5a3a3
        }

`

export const ButtonListaMatch=styled.img`
    height: 5vh;
    width: auto;
    margin-top: 2%;
    cursor: pointer;
`

export const DivListaMatch=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex-wrap: wrap;
    width: 27vw;
    height: 82vh;
    margin: 2% 0 0 2%;
    border: 3px solid #ca6cff;
    border-radius: 15px;

`

export const DivLista=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1%;
    width: 50%;

    img{
        height: 10vh;
        width: 5.5vw;
        border-radius: 200px;
        margin: 2%;
    }

    p{
        font-family: 'Rajdhani', sans-serif;
        font-size: 25px;
        color: #00abfd;
        font-weight: bold;

    }
`

export const DivBotaoDeletar=styled.div`
    display: flex;
    justify-content: end;
    justify-items: flex-end;
    align-items: flex-end;
    height: 82vh;
    margin-top: 2%;
    padding-left: 1%;
    img{
        width: auto;
        height: 5%;
        cursor: pointer;
   
    }
`


