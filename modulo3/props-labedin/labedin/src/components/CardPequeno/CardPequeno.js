import React from 'react';
import './CardPequeno.css'

function CardPequeno (props){
    return(
        <div className='box-pequeno'>
            <img src={props.imagem}/>
            <h4>{props.titulo}</h4>
            <p className='texto'>{props.texto}</p>        
        </div>
    )

}

export default CardPequeno