import "./Extras.css";
import gifTendencias from "../../assets/gif/tendencias.gif";
import Form from "../Form/Form";

function Extras(){
    return(
        <section className="extras">
                <img src={gifTendencias} alt="GIF promocional de tendencias de maquillaje" width="500" height="250" className="aparecerIzquierda"/>
                <div className="contenedorTexto aparecerDerecha">
                    <h2>¡Obtén un 20% de descuento en tu primera compra!</h2>
                    <Form />
                </div>
            </section>
    );
}   

export default Extras;