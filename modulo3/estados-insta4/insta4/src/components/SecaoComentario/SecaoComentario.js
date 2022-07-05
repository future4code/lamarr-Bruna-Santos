import React, {useState} from 'react'
import { CommentContainer, InputComentario, Button } from './Style'



export function SecaoComentario(props) {
	const [inputComentario, setInputComentario]=useState("Comentário")

	const handleInputComentario=(event)=>{
		setInputComentario(event.target.value)
		console.log(event.target.value)
	}


	return (
		<CommentContainer>
			<InputComentario nome ="Comentário" onChange={handleInputComentario} 
				placeholder={inputComentario}

			/>
			<Button onClick={props.aoEnviar}>Enviar</Button>
		</CommentContainer>
	)
}