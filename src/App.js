import "./App.css";
import Header from "./components/Header/Header";
import Registro from "./components/Registro/Registro";
import AddItem from "./components/AgregarItem/AddItem";
import Footer from "./components/Footer/Footer";
import { Equipo } from "./components/Equipo/Equipo";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState([
    {
      id: 1,
      nombre: "Omar Dario virili",
      puesto: "Desarrollador",
      foto: "https://picsum.photos/200/300",
      equipo: "Programadores",
    },
    {
      id: 2,
      nombre: "Alquien mas",
      puesto: "Development",
      foto: "https://picsum.photos/200/300",
      equipo: "FrontEnd",
    },
  ]);

  const equipos = [
    {
      titulo: "Programadores",
      colorPrimario: "#57c278",
      colorSecundario: "#D9f7e9",
    },
    {
      titulo: "FrontEnd",
      colorPrimario: "#82ccfa",
      colorSecundario: "#e8f8ff",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#e7c7e8",
    },
    {
      titulo: "UX y UI",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      titulo: "Movil",
      colorPrimario: "#ffba02",
      colorSecundario: "#fff5d9",
    },
    {
      titulo: "Imnovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ];
  const [mostrar, setMostrar] = useState(false);
  const mostrarFormulario = () => {
    setMostrar(!mostrar);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log("colaborador registrado", colaborador);
  };
  //Eliminar colaborar
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador",id)
  }

  return (
    <div className="App">
      <Header />
      {mostrar && (
        <Registro
          registrar={registrarColaborador}
          equipos={equipos.map((equipo) => equipo.titulo)}
        />
      )}

      <AddItem mostrar={mostrarFormulario} />

      {equipos.map((dato) => (
        <Equipo
         key={dato.titulo} 
         equipo={dato} 
         colaborador={colaboradores.filter(colaborador=>colaborador.equipo===dato.titulo)}
         eliminar={eliminarColaborador} 
         />
      ))}
      <Footer />
    </div>
  );
}

export default App;
