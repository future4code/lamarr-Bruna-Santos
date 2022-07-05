import styled from "styled-components";

export const CommentContainer=styled.div`
    display: flex;
    justify-content: center;
    padding: 5px
`

export const InputComentario=styled.input`
    width: 100%;
    height: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
`

export const Button=styled.button`
    margin-bottom: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    :hover{
        background-color: rgb(173, 173, 173);
        color:white;
        border: 1px solid rgb(173, 173, 173);
    }
`