import { MyProduct } from "./style";

export function Product(){
    return(
        <MyProduct>
            <p>Mamão Papaia</p>
            <input type="number"></input>
            <p>R$ 50,00</p>
            <button>Remover</button>
        </MyProduct>
    )
}