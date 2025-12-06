import { Link } from 'react-router-dom';
import Button from "../Button/Button.jsx"; 
import "./Details.css";
import sombrasPT2 from "../../assets/img/products/sombras/sombrasPT2.jpg";

function Details() {
    return (
        <div className="container-detalle">
      
            <Link to="/categoria" className="btn-volver">
                ← Volver a Categorías
            </Link>

            <div className="detalle-wrapper">
                <div className="detalle-imagen">
                    <img src={sombrasPT2} alt="Patrick Ta Sombras" />
                </div>
                <div className="detalle-info">
            
                    <span className="marca">Patrick Ta</span>
                    
                    <h1 className="titulo-producto">
                        Sombras Major Dimension Eye Illusion
                    </h1>
            
                <p className="precio-detalle">$42.00</p>

                <p className="descripcion">
                    Esta paleta de sombras ofrece una pigmentación intensa con un acabado profesional. 
                    Los tonos tierra y metálicos son perfectos tanto para looks de día como de noche. 
                    Su fórmula de larga duración asegura que tu maquillaje permanezca intacto por horas, 
                    ideal para cualquier tipo de piel.
                </p>

                <hr className="divisor" />

                <div className="contenedor-boton">
                    <Button>Agregar al Carrito</Button>
                </div>
            
                </div>
            </div>
        </div>
    );
}

export default Details;