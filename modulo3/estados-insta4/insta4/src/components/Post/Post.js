import React, {useState} from 'react'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvarBranco from '../../img/salvar.svg'
import iconeSalvarPreto from '../../img/salvo.svg'
import iconeLink from '../../img/link.svg'
import iconeLinkDois from '../../img/compartilhar.svg'
import { PostContainer, PostHeader, PostFooter, UserPhoto, PostPhoto } from './Style'




function Post(props){

  const [numeroCurtidas, setNumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [salvar, setSalvar] = useState(false)
  const [compartilhar, setCompatilhar] = useState(false)

  const onClickCurtida = () => {
    if(curtido){
      setCurtido (false)
      setNumeroCurtidas(numeroCurtidas-1)
    } else {
      setCurtido (true)
      setNumeroCurtidas(numeroCurtidas+1)
    }
    console.log('Curtiu!')
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  const onClickSalvar = ()=>{
    if(salvar){
      setSalvar (false)
    } else {
      setSalvar (true)
    }
  }

  const onClickCompartilhar = ()=>{
      setCompatilhar(false)
    
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto 
    } else {
      iconeCurtida = iconeCoracaoBranco 
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

  let iconeSalvar 
  
    if(salvar){
      iconeSalvar = iconeSalvarPreto
    } else{
      iconeSalvar = iconeSalvarBranco
    }

  let iconeCompartilhar 
    
    if(compartilhar){
      iconeCompartilhar = iconeLink
    } else{
      iconeCompartilhar = iconeLinkDois
    }



  return(
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={onClickSalvar}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={onClickCompartilhar}
        />


        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}

export default Post