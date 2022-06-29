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



function App() {
  const [inputPesquisar, setInputPesquisar]=useState("Pesquisar")

  const handleInputPesquisar=(event)=>{
    setInputPesquisar(event.target.value)
  }

  return(
    <div className='MainContainer'>
      <header>
        <p>Insta4</p>
        <input nome="Pesquisar" onChange={handleInputPesquisar} placeholder={inputPesquisar}></input>
        <div className="div-icones">
          <img className="icones" src={home}/>
          <img className="icones" src={mensagem}/>
          <img className="icones" src={adicionar}/>
          <img className="icones" src={bussola}/>
          <img className="icones" src={like}/>
        </div>
        
      </header>
            <Post
              nomeUsuario={'paulinha'}
              fotoUsuario={'https://picsum.photos/50/50'}
              fotoPost={'https://picsum.photos/200/150'}
            />
            <Post
              nomeUsuario={'bruuna.cs'}
              fotoUsuario={brunaIcone}
              fotoPost={brunaPost}
            />
            <Post
              nomeUsuario={'natureismetal'}
              fotoUsuario={natureIcone}
              fotoPost={naturePost}
            />
    </div>
  )

}


export default App;
