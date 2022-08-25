import React from "react";
import { CaixaModal, FundoModal } from "./Styled";
import {AiOutlineClose} from 'react-icons/ai'

export const Modal = ({onClose = () => {}, tripId, deletarViagem, children}) => {
    console.log(tripId)
    return (
        <FundoModal>
            <CaixaModal>
                <button onClick={onClose}> <AiOutlineClose/></button>
                <p>Tem certeza de que deseja excluir o item selecionado?</p>
                <button onClick={onClose}>Cancelar</button>
                <button onClick={()=>deletarViagem(tripId)}>Apagar</button>
                <div className="content">{children}</div>
            </CaixaModal>
        </FundoModal>
    )
};