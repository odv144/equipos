import { Children } from "react"
import "./Boton.css"
export const Boton=(props)=>{
    return(
        <button className="boton" type="submit">
            {props.children}
        </button>
    )
}