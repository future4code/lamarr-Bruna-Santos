import './App.css';
import { Produtos } from './MockDeDados';
import { Filtros } from './Components/Filtros';
import { useState } from 'react';
import { ListaDeProdutos } from './Components/ListaDeProdutos';
import { DivApp } from './Styled';
import { Carrinho } from './Components/Carrinho';

function App() {
  const [carrinho, setCarrinho]=useState([])
  const [produtoAtual, setProdutoAtual]=useState(Produtos)
  return (
    <DivApp>
      <Filtros/>
      <ListaDeProdutos meusProdutos={produtoAtual} adicionarAoCarrinho={setCarrinho} carrinho={carrinho}/>
      <Carrinho carrinho={carrinho}/>
    </DivApp>
  );
}

export default App;
