import { useState } from 'react';
import './App.css';
import { Agradecimento } from './Components/Agradecimento/Agradecimento';
import { Header } from './Components/Header/Header';
import { PrimeiraEtapa } from './Components/PrimeiraEtapa/PrimeiraEtapa';
import { Button, DivFilha, } from './Components/PrimeiraEtapa/Style';
import { SegundaEtapa } from './Components/SegundaEtapa/SegundaEtapa';
import { TerceiraEtapa } from './Components/TerceiraEtapa/TerceiraEtapa';


function App() {

  const [sectionState, setSectionState]=useState(1);

  function mostrarPrimeiraEtapa(){
    setSectionState(sectionState +1)
  }

  function render(){
    switch(sectionState){
      case 1:
        return(<PrimeiraEtapa/>);
        break;
    
      case 2:
        return(<SegundaEtapa/>);
        break;
    
      case 3:
        return(<TerceiraEtapa/>);
        break;
    
      case 4:
        return(<Agradecimento/>);
        break;
        default:
          break;
    }
  }

  return (
    <div className="Div">
      <Header/>
      {render()}
      <Button onClick={mostrarPrimeiraEtapa}>Próxima Etapa</Button>


    </div>

  );
}

export default App;
