import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "./GlobalStyled";
import { Rotas } from "./pages/Rotas";
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Rotas/>
      <ToastContainer/>
    </>
  );
}
export default App;
