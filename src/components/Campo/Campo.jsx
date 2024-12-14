import { useState } from "react"
import "./Campo.css"

export const Campo = ({titulo,place,required,valor,actualizar})=>{
    const placeholder= `${place}...`
    
    

    const handleValue= (e)=>{
        actualizar(e.target.value)

    }
    return(
        <div className="campo">
           <label>{titulo}</label>
           <input 
           type="text" 
           name={titulo} 
           value={valor}
           onChange={handleValue}
           required={required}
            placeholder={placeholder}
           />

        </div>
    )
}