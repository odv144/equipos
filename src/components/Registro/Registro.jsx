import { useState } from "react";
import { Boton } from "../Boton/Boton.jsx";
import { Campo } from "../Campo/Campo.jsx";
import { ListaOpciones } from "../ListaOpciones/ListaOpciones.jsx";
import "./Registro.css";
function Registro({equipos,registrar}) {
    const crearColaborador=(e)=>{
      e.preventDefault()
      let datosEnviar={
        id:3,
        nombre,
        puesto,
        foto,
        equipo
      }
      registrar(datosEnviar)
    }

    const [nombre,setNombre]=useState("");
    const [puesto,setPuesto]=useState("");
    const [foto,setFoto]=useState("");
    const [equipo,setEquipo]=useState("");

  return (
    <section className="formulario">
      <form className="form-colab" onSubmit={crearColaborador}>
        <h2> Rellena el formulario para crear el colaborador</h2>
        <Campo titulo="Nombre" place="Ingrese el nombre" required valor={nombre} actualizar={setNombre} />
        <Campo titulo="Puesto" place="Puesto al que pertenece" requiredvalor={puesto} actualizar={setPuesto}/>
        <Campo titulo="Foto" place="Foto que lo representa" valor={foto} actualizar={setFoto}/>
        <ListaOpciones equipos={equipos} equipo={equipo} actualizar={setEquipo}/>
       <Boton>
       Crear
       </Boton>
      </form>
    </section>
  );
}

export default Registro;
