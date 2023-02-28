import { Product } from "../Product";
import { ProductSelected } from "./style";

export default function ProductList({productList, setProductList}){
    const removeProduct=(id)=>{
        const newProductList=productList.filter((p)=>{
            return p.id !== id
        })
        setProductList(newProductList)
    }
    let soma = 0;
    if(productList.length>0){
        productList.forEach(element => {
            soma = soma+(element.price*element.qty)
        });
    }
    return(
        <ProductSelected>
            {productList.length > 0 &&
                <h2>Produtos selecionados:</h2>
            }

            {productList && productList.map((p)=>{
                return(
                    <Product key={p.id}
                        product={p}
                        productList={productList}
                        setProductList={setProductList}
                        removeProduct={removeProduct}
                    />
                )
            })}
            {productList.length>0 &&
                <h3>Total: R$ {soma.toFixed(2)}</h3>
            }
        </ProductSelected>
    );
}