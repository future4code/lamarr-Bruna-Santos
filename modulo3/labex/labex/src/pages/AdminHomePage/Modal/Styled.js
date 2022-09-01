import styled from "styled-components";

export const FundoModal=styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CaixaModal=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
    width: 25%;
    height: 25%;
    color: black;
    border-radius: 20px;
    p{
        font-size: 18px;
        font-family: 'Figtree', sans-serif;
        color: gray;
        text-align: center;
    }

    button{
        min-width: 25%;
        margin: 0 2%;
        border-radius: 5px;
        font-family: 'Rajdhani', sans-serif;
        font-size: 18px;
        cursor: pointer;
        transition: .5s ease-in ;
        color: #2d1687;
        background-color: white;
        border-radius: 10px;
        opacity: 0.6;
        border: 2px solid #2d1687;
}
    button:nth-child(1){
        border: none;
        background-color: transparent;
        color: blueviolet;
        transition: .6s ease-in ;
        :hover{
            color: black;
            -webkit-transform: scale(1.3);
             transform: scale(1.3);
        }
}
    button:nth-child(4){
        color: red;
        background-color: #e39b9b;
        opacity: 1;
        border: 2px solid #e39b9b;
        transition: .4s ease-in ;
        :hover{
            color: white;
            background-color: red;
            -webkit-transform: scale(1.03);
             transform: scale(1.03);
        }
    }

    button:nth-child(3){
        color: blueviolet;
        background-color: lightgray; 
        opacity: 0.8;
        border: 2px solid lightgray;
        transition: .4s ease-in ;
        :hover{
            background-color: #bdbdbdeb;
            color: blueviolet;
            opacity: 1;
            -webkit-transform: scale(1.03);
            transform: scale(1.03);
        }
    }
`

