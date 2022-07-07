import styled from "styled-components";

export const PostContainer=styled.div`
    border: 1px solid gray;
    border-radius: 10px;
    width: 300px;
    margin: 30px 0 0 0
`

export const PostHeader=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    p{
        font-family: sans-serif;
        font-weight: bold;
        color: #14bff3;
    }
`

export const UserPhoto=styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%
`

export const PostPhoto=styled.img`
    width: 100%;
`
export const PostFooter=styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between
`


