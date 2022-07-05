import './App.css';
import {Logo, ImagemLogo, Header, Main, Label, Input, Footer, Aside, Div, Button, DivInput} from './style'
import LogoLabenu from './img/logoLabenu.jpg'


function App() {
  return (
    <>
    <Header>
      <ImagemLogo src={LogoLabenu} alt="Logo WhatsLab"></ImagemLogo>
      <Logo>WhatsLab</Logo>
    </Header>

    <Div>
      <Aside>
      </Aside>
      <Main>
        <DivInput>
          <Label>Remetente:</Label>
          <Input type="text" nome="Remetente"></Input>

          <Label>Mensagem:</Label>
          <Input type="text" nome="Mensagem"></Input>
          <Button>Enviar mensagem</Button>
        </DivInput>
      </Main>
      <Aside>

      </Aside>
    </Div>

    <Footer>
      <p>Copyright © Labenu All right reserved R. Pais Leme, 215, 
        Conjunto 820 Pinheiros, CEp 05424-150</p>
    </Footer>
    </>

  );
}

export default App;
