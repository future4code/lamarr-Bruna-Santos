import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { goToHome } from "../../routes/Coordenator";
import { EndPageStyled } from "./styled";

export default function EndPage(){
    const navigate = useNavigate()
    setTimeout(()=>{
        goToHome(navigate)
    },2000);

    return(
        <>
            <Header />
            <EndPageStyled>
                <h1>Pedido finalizado com sucesso!</h1>
                <h2>Obrigada pela preferência!</h2>
            </EndPageStyled>
        </>
    )
}
