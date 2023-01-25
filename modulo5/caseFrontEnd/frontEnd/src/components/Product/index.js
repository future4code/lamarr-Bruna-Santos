import { MyButton } from "../Formulario/style";
import {MyProduct, PriceStyled } from "./style";

export function Product({product, productList, setProductList, removeProduct}){  
    const updateQuantidade=(evento)=>{
        const visibleButtonAdd = true
        const currentQty=evento.target.value;
        const productUpdate=productList.map((p)=>{
            if(p.id === product.id){
                p.qty=currentQty;
            }
            return p
        })
        setProductList(productUpdate)
    }

    return(
        <MyProduct>
            <div>
                <p>{product.name}</p>
                <input id="qty" type={"number"} name="qty" min="0" max={(product.qty_stock.toString())} value={product.qty} onChange={updateQuantidade}></input>
                <PriceStyled>R$ {parseFloat(product.price*product.qty).toFixed(2)}</PriceStyled>
            </div>
            <MyButton type='button' onClick={()=>{removeProduct(product.id)}}>Remover</MyButton>
        </MyProduct>
    )
}