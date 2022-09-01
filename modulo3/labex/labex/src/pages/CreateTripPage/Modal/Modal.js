import React from "react";

export const Modal = ({ onClose= () => {}, children})=>{
    return(
        <div>
            <div>
                <button onClick={onClose}>close</button>
                <div>{children}</div>
            </div>
        </div>
    )
}