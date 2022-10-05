import { useState } from 'react';
import { Botoes, Button, Conversa, Div, DivEu, DivRemetente, Header, Input, InputMensagem, Main, Mensagens, MensagensRemetente, Remetente, Texto, TextoEu } from './Style';

function App() {
    const [inputRemetente, setInputRemetente] = useState("")
    const [inputMensagem, setInputMensagem]= useState("")
    const [conversas, setConversas]=useState([
    ])

    const handleInputRemetente = (evento)=>{
      setInputRemetente(evento.target.value)
    }

    const handleInputMensagem = (evento)=>{
      setInputMensagem(evento.target.value)
    }

    const adicionarMensagem = (evento) =>{
      evento.preventDefault();

      const novaMensagem = {remetente: inputRemetente, mensagem: inputMensagem}
      const novaMensagemEnviada= [...conversas, novaMensagem]
      setConversas(novaMensagemEnviada)
      setInputMensagem("")
      setInputRemetente("")
    }

    const listaDeMensagem = conversas.map((elemento, index)=>{
      const deletarMensagem = () =>{
        const novaMensagemEnviada = [...conversas]
        const deletar = novaMensagemEnviada.findIndex((item)=>{
          return item === elemento
        })
        novaMensagemEnviada.splice(deletar, 1)
        setConversas(novaMensagemEnviada)
      }

      if(elemento.remetente==="eu"){
        return(
          <DivEu>
            <Mensagens key={index} onDoubleClick={deletarMensagem}>
            <TextoEu>{elemento.mensagem}</TextoEu>
            </Mensagens>
          </DivEu>
        )}
      else{
        return(
          <DivRemetente>
            <MensagensRemetente key={index} onDoubleClick={deletarMensagem}>
              <Remetente>{elemento.remetente}</Remetente>
              <Texto>{elemento.mensagem}</Texto>
            </MensagensRemetente>
          </DivRemetente>
        )
      }
    }) 


  return (
    <>
      <Header>
        <span>WhatsLab</span>
      </Header>
      <Main>
        <Conversa>
          <Div>
            {listaDeMensagem}
          </Div>
        </Conversa> 
        <Botoes>
            <Input placeholder='Remetente'
            value={inputRemetente}
            onChange={handleInputRemetente}
            />
            <InputMensagem placeholder='Mensagem'
            value={inputMensagem}
            onChange={handleInputMensagem}
            />

          <Button onClick={adicionarMensagem}>Enviar</Button>
        </Botoes>
      </Main>
    </>
  );
}

export default App;
