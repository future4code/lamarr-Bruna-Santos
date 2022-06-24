import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import brunaImagem from './img/brunaImagem.png'
import sojaImagem from './img/soja.png'
import veganImagem from './img/vegan.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './img/e-mail.png'
import endereco from './img/endereco.png'

function App() {
  const [abrir, setAbrir] = useState(false)

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={brunaImagem}
          nome="Bruna de Carvalho dos Santos" 
          descricao="Oi, eu sou a Bruna, aluna da turma Lamarr do curso de Desenvolvimento Web Full Stack na Labenu.
                    Estou estudando o front-end e já tenho conhecimento sobre JS, HTML e CSS"
        />
        
        <ImagemButton 
          abrir={abrir}
          setAbrir={setAbrir}
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      { abrir &&
        <div>
          <div className='page-section-container'>
            <CardPequeno
              imagem={email}
              titulo= "E-mail:"
              texto="brunacarvalho260697@gmail.com"
            />
          </div>
          
          <div className='page-section-container'>
            <CardPequeno
              imagem={endereco}
              titulo= "Endereço:"
              texto="Rua Labenu"
            />
          </div>
        </div>
      }
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={sojaImagem} 
          nome="Kuhlmann Tecnologia e Monitoramento Agrícola" 
          descricao="Auxiliar administrativo" 
        />
        
        <CardGrande 
          imagem={veganImagem} 
          nome="Mornings - Café da manhã o dia todo" 
          descricao="Caixa" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
