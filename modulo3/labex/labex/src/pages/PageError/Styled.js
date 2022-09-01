import styled from 'styled-components'
import imagemBackgroundError from '../img/background-404.png'
import imagemBackgroundErrorResponsive from '../img/background-404-responsive.png'

export const DivError=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(${imagemBackgroundError});
    background-size: cover; 
    @media (max-width: 980px){
        background-image: url(${imagemBackgroundErrorResponsive});
        background-size: cover; 
    }
    button{
        min-width: 8vw;
        border-radius: 10px;
        border: 2px solid black;
        margin: 20px 0;
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        font-weight: bold;
        color:#b9148e;
        padding: 3px 10px;
        cursor: pointer;
        transition: .5s ease-in-out ;
        @media (max-width: 980px){
            min-width: 30vw;
            height: 5vh;
            margin: 50px 0;
        }

        :hover{
            background-color: #b9148e;
            color: white;
            border: #b9148e;
        }
    }
`
