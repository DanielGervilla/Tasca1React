import { useState } from "react" 
import Exercici3 from "./assets/exercici3";
import Exercici4 from "./assets/exercici4";
import Exercici1 from "./assets/exercici1";
import Exercici2 from "./assets/exercici2";
function Menu() {
    //ESTATS
    const [tasca, setTasca] = useState(0);

    if(tasca === 1){
        return(
            <>
            <Exercici1 />
            <Exercici2  />
            <Exercici3 />
            <Exercici4 />  
            </>

        )
    }
    //return amb el html
  return (
    <div className="exercici3">
        <div>
            <p className={tasca}>MENU</p>
        </div>
        <div>
            <button onClick={() => setTasca(1)}>Tasca 1</button>
        </div> 
    </div>
  )
}

export default Menu