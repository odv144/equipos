import "./App.css";
import Header from "./components/Header/Header";
import Registro from "./components/Registro/Registro";
import AddItem from "./components/AgregarItem/AddItem";
import Footer from "./components/Footer/Footer";
import { Equipo } from "./components/Equipo/Equipo";
function App() {
  return (
    <div className="App">
      <Header />
      <Registro />
      <AddItem />
      <Equipo equipo="Programación"/>
      <Footer />
    </div>
  );
}

export default App;
