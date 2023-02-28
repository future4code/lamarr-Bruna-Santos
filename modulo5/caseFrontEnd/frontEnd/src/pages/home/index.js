import { useState } from "react";
import { Formulario } from "../../components/Formulario";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

export default function Home(){
    const [productList, setProductList]=useState([])

    return(
        <div>
            <Header/>
            
            <ProductList 
                productList={productList}
                setProductList={setProductList}
            />
            <Formulario
                productList={productList}
                setProductList={setProductList}
            />
        </div>
    )
}