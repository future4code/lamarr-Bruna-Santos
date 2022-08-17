import { useState } from "react"

export const useForm=(estadoInicial)=>{
    const [formulario, setFormulario]=useState(estadoInicial)

    const onChange=(event)=>{
        const {name, value} = event.target
        setFormulario({...formulario, [name]: value})

    }

    return [formulario, onChange]
}