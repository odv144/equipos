import "./App.css";
import Header from "./components/Header/Header";
import Registro from "./components/Registro/Registro";
import AddItem from "./components/AgregarItem/AddItem";
import Categoria from "./components/Categoria/Categoria";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Registro />
      <AddItem />
      <Categoria />
      <Footer />
    </div>
  );
}

export default App;
