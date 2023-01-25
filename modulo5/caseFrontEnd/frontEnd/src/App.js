import { GlobalStyle } from "./GlobalStyle";
import { Routers } from "./routes/Routers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <GlobalStyle />
      <Routers />
      <ToastContainer />
    </>

  );
}

export default App;
