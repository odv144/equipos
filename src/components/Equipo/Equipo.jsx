import { Colaborador } from "../Colaborador/Colaborador";
import "./Equipo.css";
export const Equipo = ({ equipo, colaborador, eliminar }) => {
  const { titulo, colorPrimario, colorSecundario } = equipo;

  return (
    <>
      {colaborador.length > 0 && (
        <section
          className="equipos"
          style={{ backgroundColor: colorSecundario }}
        >
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
