import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { goToEndOrder } from "../../routes/Coordenator";
import { MyButton, MyClient, MyForm } from "./style";

export function Formulario({productList, setProductList}){
    const navigate=useNavigate()
    const [visibleButtonClient, setVisibleButtonClient]=useState(true)
    const [visibleButtonProduct, setVisibleButtonProduct]=useState(true)
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
            toast.success('🥑 Cliente cadastrado!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        }).catch((error)=>{
        })
    }

    //selecionar cliente:
    const selectClientButton=()=>{
        setVisibleButtonClient(!visibleButtonClient)
    }

    //-----------------------------PRODUTOS-----------------------------------------//

        //selecionar produtos:
            // cliente selecionado:
    const selectProduct=  !isloadingProduct && dataProduct && dataProduct.find((dProduct)=>{
        return dProduct.name===form.product
    })

    // add produto:
    const addProduct = () =>{
        const newProduct = selectProduct;
        newProduct.qty = form.qty
        setProductList([...productList, newProduct])
    }

    /////-----------------------------ORDER------------------------------------///

    const makeOrder=(event)=>{
        event.preventDefault();
        if(!productList || !form.deliveryDate || !selectClient ){
            alert("Confira os seus dados")
        }else{
            const deliveryDateDb = `${form.deliveryDate.split("/")[2]}-${form.deliveryDate.split("/")[1]}-${form.deliveryDate.split("/")[0]}`
            
            const productListDB=productList.map((p)=>{
                return {"id":p.id, "qty":Number(p.qty)}
            })
            const body = 
            {
                "fk_client": Number(selectClient.id),
                "delivery_date":deliveryDateDb,
                "products":productListDB
            }
            axios.post('http://localhost:3003/order',body, {})
            .then((response)=>{
                console.log(response);
                goToEndOrder(navigate)
            }).catch((error)=>{
                console.log(error.message);
            })
        }
    }

    return(
        <MyForm onSubmit={makeOrder}>
            {selectClient&& !visibleButtonClient && 
                <MyClient>
                    <h2>Client: {selectClient.name }</h2>
                </MyClient>
            }
            {selectClient && !visibleButtonClient || 
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
                    <MyButton type="button" onClick={()=> selectClientButton()}>Confirmar</MyButton>}

                </div>
            }
            {selectClient && !visibleButtonClient &&
                <div id='select-product'>
                    <label htmlFor="product">Produto:</label>
                    <input id="product" list="dataProduct" name="product" onChange={onChange} value={form.product} ></input>
                    <datalist id='dataProduct'>
                        {isloadingProduct && !dataProduct && <option>Carregando...</option>}

                        {!isloadingProduct && dataProduct && dataProduct.map((product)=>{
                            return <option key={product.id}>
                                {product.name}
                            </option>
                        })}
                    </datalist>
                    <label htmlFor="qty" >Quantidade</label>
                    <input id="qty" type="number" name="qty" value={form.qty} onChange={onChange}></input>
                    <p>R$ {selectProduct && parseFloat(selectProduct.price*form.qty).toFixed(2)}</p>
                    {selectProduct && visibleButtonProduct && selectProduct.qty_stock>=form.qty &&
                        <MyButton type="button" onClick={()=>addProduct()}>OK</MyButton>
                    }
                    {selectProduct && selectProduct.qty_stock<form.qty &&
                        <h3>Produto indisponível</h3>
                    }
                </div>
            }
            {productList.length>0 && 
                <div id='order'>
                    <label htmlFor="deliveryDate">Data de Entrega (DD/MM/AAAA):</label>
                    <input id="deliveryDate" name="deliveryDate" onChange={onChange} value={form.deliveryDate}></input>
                    <MyButton type='submit'>Confirmar Pedido</MyButton>
                </div>
            }
        </MyForm>
    )
}