import React from 'react'
import { IconContainer, IconImagem} from './Style'

export function IconeComContador(props) {
	return (

	<IconContainer>
		<IconImagem alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>

)}
