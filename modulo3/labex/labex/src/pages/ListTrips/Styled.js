import styled from "styled-components";

export const DivHome=styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    h3{
        font-size: 25px;
    }
`

export const BotoesHome=styled.div`
    display: flex;
    button{
        width: 6vw;
        height: 3vh;
        margin-left: 5px;
        border-radius: 15px;
        font-size: 15px;
        cursor: pointer;

    }
`