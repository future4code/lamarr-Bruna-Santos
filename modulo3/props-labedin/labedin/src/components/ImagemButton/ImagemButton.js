import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div onClick={ () => props.setAbrir(!props.abrir) } className="image-button-container">
            <img src={ props.imagem } alt='imagem'/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemButton;