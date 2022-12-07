import axios from "axios";

export async function getAddress(cep:string) {
    try{
        const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json `)
/*         return `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
 */
        return {
            "logradouro": data.logradouro, 
            "bairro": data.bairro, 
            "localidade": data.localidade, 
            "uf": data.uf 
        }
        
    }catch(error:any){
        throw new Error(error.message)
    }
    
}
