import { useState } from "react";
import { Colaborador } from "../Colaborador/Colaborador";
import "./Equipo.css";
export const Equipo = ({ equipo, colaborador, eliminar }) => {
  const { titulo, colorPrimario, colorSecundario } = equipo;
  const [color,setColor]= useState(colorSecundario);
  const cambiarColor=(e)=>{
      setColor(e.target.value)
  }
  return (
    <>
      {colaborador.length > 0 && (
        <section
          className="equipos"
          style={{ backgroundColor: color }}
        >
        <div className="cambioColor">
        <input className="inputColor" type="color" value={color} onChange={cambiarColor}/>
        </div>
          <h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
          <div className="colaboradores">
            {colaborador.map((people) => (
              <Colaborador
                key={people.id}
                people={people}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminar}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};
