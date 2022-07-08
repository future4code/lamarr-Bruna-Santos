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
import {MainContainer, Header, Input, DivIcones, Icones, Imagem, Form, InputUsuario, InputLink, Button, Titulo} from './Style'
import logoInstagram from './img/instagram.png'



function App() {
  const [inputUsuario, setInputUsuario]=useState("")
  const [inputFotoUsuario, setInputFotoUsuario]=useState("")
  const [inputFotoPublicacao, setInputPublicacao]=useState("")
  const [listaDePost, setListaDePost]=useState([
    {nomeUsuario:"Paulinha", fotoUsuario:"https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/150"},
    {nomeUsuario:"bruuna.cs", fotoUsuario:brunaIcone, fotoPost: brunaPost,},
    {nomeUsuario:"Natureismetal", fotoUsuario:natureIcone, fotoPost: naturePost,}
  ])

  // eventos
  const handleInputUsuario = (evento) =>{
    setInputUsuario(evento.target.value)
  }

  const handleInputFotoUsuario = (evento) =>{
    setInputFotoUsuario(evento.target.value)
  }

  const handleInputFotoPublicacao= (evento) =>{
    setInputPublicacao(evento.target.value)
  }

  // adicionar o item
  const adicionarPublicacao=(evento) =>{
    evento.preventDefault();

    const novaPublicacao= {nomeUsuario: inputUsuario, fotoUsuario: inputFotoUsuario, fotoPost: inputFotoPublicacao}
    const novaPublicacaoPostada = [novaPublicacao, ... listaDePost]
    setListaDePost(novaPublicacaoPostada)
  }

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
        <Imagem src={logoInstagram}/>
        <DivIcones>
          <Input nome="Pesquisar" onChange={handleInputPesquisar} placeholder={inputPesquisar}></Input>
          <Icones src={home}/>
          <Icones src={mensagem}/>
          <Icones src={adicionar}/>
          <Icones src={bussola}/>
          <Icones src={like}/>
        </DivIcones>
        
      </Header>
      <Titulo>Compartilhe seus momentos:</Titulo>
      <Form>
        <InputUsuario placeholder='Usuário'
        value={inputUsuario}
        onChange={handleInputUsuario}/>

        <InputLink placeholder='Link da foto do usuário'
        value={inputFotoUsuario}
        onChange={handleInputFotoUsuario} />

        <InputLink placeholder='Link da imagem a ser publicada'
        value={inputFotoPublicacao}
        onChange={handleInputFotoPublicacao} />

      </Form>
      <Button onClick={adicionarPublicacao}>Publicar</Button>

      {postRenderizado}

          
    </MainContainer>
  )

}


export default App;
