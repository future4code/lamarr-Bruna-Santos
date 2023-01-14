import { Formulario } from "../../components/Formulario";
import Header from "../../components/Header";
import { Product } from "../../components/Product";

export default function Home(){
    return(
        <div>
            <Header />
            <Product />
            <Formulario />
        </div>
    )
}