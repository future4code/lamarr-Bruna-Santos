import React, {useState} from 'react';
import Post from './components/Post/Post';
import './style.css'
import brunaIcone from './img/icone-bruna.jpg'
import brunaPost from './img/post-bruna.PNG'
import natureIcone from './img/logo-natureismetal.jpg'
import naturePost from './img/post-nature.PNG'
import home from './img/home.png'
import mensagem from './img/chat.png'
import adicionar from './img/adicionar.png'
import bussola from './img/bussola.png'
import like from './img/gostar.png'
import {MainContainer, Header, Input, DivIcones, Icones} from './Style'



function App() {
  const [listaDePost, setListaDePost]=useState([
    {nomeUsuario:"Paulinha", fotoUsuario:"https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/150"},
    {nomeUsuario:"bruuna.cs", fotoUsuario:brunaIcone, fotoPost: brunaPost,},
    {nomeUsuario:"Natureismetal", fotoUsuario:natureIcone, fotoPost: naturePost,}
  ])

  let postRenderizado= listaDePost.map((post, index)=>(
    <Post key={index}
    nomeUsuario={post.nomeUsuario}
    fotoUsuario={post.fotoUsuario}
    fotoPost={post.fotoPost}
    />
  )
  )
  console.log(postRenderizado)
  
  const [inputPesquisar, setInputPesquisar]=useState("Pesquisar")

  const handleInputPesquisar=(event)=>{
    setInputPesquisar(event.target.value)
  }

  return(
    <MainContainer>
      <Header>
        <p>Insta4</p>
        <Input nome="Pesquisar" onChange={handleInputPesquisar} placeholder={inputPesquisar}></Input>
        <DivIcones>
          <Icones src={home}/>
          <Icones src={mensagem}/>
          <Icones src={adicionar}/>
          <Icones src={bussola}/>
          <Icones src={like}/>
        </DivIcones>
        
      </Header>
      {postRenderizado}

          
    </MainContainer>
  )

}


export default App;
