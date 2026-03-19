import { useState } from "react"
import "./App.css"
import Exercici3 from "./assets/exercici3.jsx";
import Exercici4 from "./assets/exercici4.jsx";
import Exercici1 from "./assets/exercici1.jsx";
import Exercici2 from "./assets/exercici2.jsx";
import Galeria from "./assets/tasca2/Galeria.jsx";
import Carrussel from "./assets/tasca2/carrussel.jsx";
import Tasca3 from "./assets/tasca3/tasca3.jsx";
import Menu from "./menu.jsx";
function App() {
  //ESTATS
    const [exercici, setExercici] = useState("Exercici 1");

    function exercicis() {
        switch(exercici) {
            case "Exercici 1":
                return <Exercici1 />;
            case "Exercici 2":
                return <Exercici2 />;
            case "Exercici 3":
                return <Exercici3 />;
            case "Exercici 4":
                return <Exercici4 />;
            case "Galeria":
                return <Galeria />;
            case "Carrussel":
                return <Carrussel />;
            case "Tasca3":
                return <Tasca3 />;
            default:
                return null;
        }
    }
    //return amb el html
  return (
    <div className="app">
      <Menu canviarTasca={setExercici} />
      <div className="app__content">
        {exercicis()}
      </div>
    </div>
  )
}

export default App
