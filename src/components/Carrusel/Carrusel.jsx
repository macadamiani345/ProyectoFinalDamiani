import "./Carrusel.css";
import publicidadRB from "../../assets/img/carruselimg/publicidadRB.jpg";
import publicidadABH from "../../assets/img/carruselimg/publicidadABH.jpg";
import publicidadND from "../../assets/img/carruselimg/publicidadND.jpg";
import publicidadRB2 from "../../assets/img/carruselimg/publicidadRB2.jpg";

function Carrusel(){
    return(
        <main>
            <div className="carrusel">
                <ul>
                    <li>
                        <img src= {publicidadRB} alt="Promoción de maquillaje Rare Beauty"/>
                    </li>
                    <li>
                        <img src= {publicidadABH} alt="Promoción de maquillaje Anastasia Beverly Hills"/>
                    </li>
                    <li>
                        <img src= {publicidadND} alt="Promoción de maquillaje Natasha Denona"/>
                    </li>
                    <li>
                        <img src= {publicidadRB2} alt="Promoción de maquillaje Rare Beauty"/>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Carrusel;