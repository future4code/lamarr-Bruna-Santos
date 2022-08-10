import styled from "styled-components";

export const DivFormulario=styled.div`
    width: 98vw;
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;

        input{
            margin-bottom: 10px;
            border-radius: 5px;
            border: 2px solid pink;
            height: 3vh;


        }

        select{
            margin-bottom: 10px;
            width: 20vw;
            height: 3vh;
            border-radius: 5px;
            border: 2px solid pink;

        }
    }

`

export const DivBotoesFormulario=styled.div`
    display: flex;

    button{
        cursor: pointer;
    }
`