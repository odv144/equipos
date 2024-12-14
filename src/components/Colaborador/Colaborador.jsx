import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";
export const Colaborador = ({ people, colorPrimario, eliminarColaborador }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(people.id)}
      ></AiFillCloseCircle>

      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img className="imagen" src={people.foto} alt="No se que cap" />
      </div>
      <div className="detalle">
        <h4>{people.nombre}</h4>
        <h5>{people.equipo}</h5>
      </div>
    </div>
  );
};
