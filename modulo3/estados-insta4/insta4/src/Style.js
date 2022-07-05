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
    justify-content:center;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid rgb(231, 230, 230);
    width: 95vw;
    height: 60px;
    p{
        font-family: 'Yellowtail', cursive;
        font-size: 30px;
        color:rgb(175, 175, 175);
        width: 333px;
    }
`

export const Input=styled.input`
    height: 36px;
    width: 236px;
    border-radius: 8px;
    border: none;
    background-color: rgb(233, 233, 233);
    padding: 0 20px;
    font-size: 15px;
    ::placeholder{
        color:gray;
    }
`

export const DivIcones=styled.div`
    width: 333px;
    margin-left: 100px;
`

export const Icones=styled.img`
    margin-left: 30px;
    width: 30px;
`

