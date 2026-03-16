import { useState } from "react" 
import Exercici3 from "./assets/exercici3.jsx";
import Exercici4 from "./assets/exercici4.jsx";
import Exercici1 from "./assets/exercici1.jsx";
import Exercici2 from "./assets/exercici2.jsx";
import Galeria from "./assets/tasca2/Galeria.jsx";
import Carrussel from "./assets/tasca2/carrussel.jsx";
const Menu = ({ canviarTasca }) => {
    //ESTATS
    const [exercici, setExercici] = useState(0);

    function exercicis() {
        switch(exercici) {
            case 1:
                return <Exercici1 />;
            case 2:
                return <Exercici2 />;
            case 3:
                return <Exercici3 />;
            case 4:
                return <Exercici4 />;
            case 5:
                return <Galeria />;
            case 6:
                return <Carrussel />;
            case 7:
                return (
                    <>
                        <Exercici1 />
                        <Exercici2 />
                        <Exercici3 />
                        <Exercici4 />
                        <Galeria />
                        <Carrussel />
                    </>
                );
            default:
                return null;
        }
    }
    //return amb el html
  return (
    <div className="menu">
        <div>
            <p>MENU TASCA1</p>
        </div>
        <div>
            <button onClick={() => setExercici(1)}>Exercici 1</button>
        </div> 
        <div style={{margin: "10px"}}>
            <button onClick={() => setExercici(2)}>Exercici 2</button>
        </div>
        <div style={{margin: "10px"}}>
            <button onClick={() => setExercici(3)}>Exercici 3</button>
        </div>
        <div style={{margin: "10px"}}>
            <button onClick={() => setExercici(4)}>Exercici 4</button>
        </div>
        <div style={{margin: "10px"}}>
            <button onClick={() => setExercici(5)}>Exercici 2.1</button>
        </div>
        <div style={{margin: "10px"}}>
            <button onClick={() => setExercici(6)}>Exercici 2.2</button>
        </div>
         <div style={{margin: "10px"}}>
            <button onClick={() => setExercici(7)}>All Exercises</button>
        </div>
         <div style={{margin: "10px"}}>
            <button onClick={() => canviarTasca(2)}>Tasca 2</button>
        </div>
        {exercicis()}
    </div>
  )
}

export default Menu