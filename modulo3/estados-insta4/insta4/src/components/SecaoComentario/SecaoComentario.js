import React, {useState} from 'react'
import './style.css'



export function SecaoComentario(props) {
	const [inputComentario, setInputComentario]=useState("Comentário")

	const handleInputComentario=(event)=>{
		setInputComentario(event.target.value)
		console.log(event.target.value)
	}


	return (
		<div className='CommentContainer'>
			<input className='InputComentario' nome ="Comentário" onChange={handleInputComentario} 
				placeholder={inputComentario}

			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}