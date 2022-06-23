import fotoBruna from'./img/brunaImagem.png';
import './App.css'

function App() {
  function mensagem(){
    alert("Boa noite!")
  }
  return (
    <div className="App">
      <h1>Olá! Eu sou a Bruna.</h1>
      <img className='imagem-bruna' src={fotoBruna} alt="Selfie da Bruna"/>
      <p>Essa é meu primeiro projeto com React!</p>
      <button onClick={mensagem}><p className='texto-botao'>Clique aqui!</p></button>
    </div>
  );
}

export default App;
