import "./ListaOpciones.css"

export const ListaOpciones = ({equipos, equipo,actualizar})=>{
    
    const manejarCambio=(e)=>{
        actualizar(e.target.value)
    }
    return (
        <div className="opciones">
            <label>Equipos</label>
            <select value={equipo} onChange={manejarCambio}>
            <option value="" disabled defaultValue={""} hidden>Seleccionar Equipo</option>
                {equipos.map((equipo,index)=> <option key={index} value={equipo}>{equipo}</option>)}
                
            </select>
        </div>
    )
}