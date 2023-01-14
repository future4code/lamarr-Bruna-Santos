import axios from "axios";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { MyButton, MyForm } from "./style";

export function Formulario(){
    const [visibleButtonClient, setVisibleButtonClient]=useState(true)
    const [form, onChange, restForm] = useForm({ client: "", product: "", qty: 1, deliveryDate: "" })
    const [dataClient, isloadingClient, erroClient,upClient,setUpClient] = useRequestData('http://localhost:3003/client');
    const [dataProduct, isloadingProduct, erroProduct] = useRequestData('http://localhost:3003/products');
    //
    // cliente selecionado:
    const selectClient= !isloadingClient && dataClient && dataClient.find((dClient)=>{
        return dClient.name===form.client
    })

    // add cliente que ainda não foi cadastrado:

    const addClient=()=>{
        const body=
        {
            "name": form.client
        }
        axios.post("http://localhost:3003/client",body,{})
        .then((response)=>{
            setUpClient(!upClient)
        }).catch((error)=>{
        })
    }

    //selecionar cliente:
    const selectCliente=()=>{
        setVisibleButtonClient(!visibleButtonClient)
    }
    return(
        <MyForm>
            {selectClient&& !visibleButtonClient && <h1>Client: {selectClient.name }</h1>}
            <div id='select-client'>
                <label htmlFor="client">Nome do cliente:</label>
                <input id="client" list="dataClient" name="client" onChange={onChange} value={form.client}></input>
                <datalist id='dataClient'>

                    {isloadingClient && !dataClient && <option>Carregando...</option>}

                    {!isloadingClient && dataClient && dataClient.map((client)=>{
                        return <option key={client.id}>
                            {client.name}
                        </option>
                    })}
                </datalist>
                {!selectClient && (form.client.length>2) &&
                <MyButton type="button" onClick={()=>{addClient()}}>Cadastrar cliente</MyButton>}
                {selectClient&& visibleButtonClient && 
                <MyButton type="button" onClick={()=> selectCliente()}>Confirmar</MyButton>}

            </div>

            <div>
                <label htmlFor="product">Produto:</label>
                <input id="product" list="dataProduct"></input>
                <datalist id='dataProduct'>
                    {isloadingProduct && !dataProduct && <option>Carregando...</option>}

                    {!isloadingProduct && dataProduct && dataProduct.map((product)=>{
                        return <option key={product.id}>
                            {product.name}
                        </option>
                    })}
                </datalist>
                <label>Quantidade</label>
                <input id="qty" type="number"></input>
                <p>R$ 1000</p>
                <MyButton>Confirmar</MyButton>
            </div>

            <div>
                <label htmlFor="deliveryDate">Data de Entrega (DD/MM/AAAA):</label>
                <input id="deliveryDate" list="dataProduct"></input>
                <MyButton>Confirmar Pedido</MyButton>
            </div>
        </MyForm>
    )
}