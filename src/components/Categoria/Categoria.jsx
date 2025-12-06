import "../ProductBox/ProductBox.css";
import sombrasMario from "../../assets/img/products/sombras/sombrasMario.jpg";
import sombrasPT from  "../../assets/img/products/sombras/sombrasPT.jpg";
import sombrasCT from "../../assets/img/products/sombras/sombrasCT.jpg";
import sombrasDior from "../../assets/img/products/sombras/sombrasDior.jpg";
import sombrasPT2 from "../../assets/img/products/sombras/sombrasPT2.jpg";
import Button from "../Button/Button.jsx";
import { Link } from 'react-router-dom';

function Categoria (){
    return(
        <section className="alineacionProductos">
            <h2>Sombras</h2>
            <div className="contenedorProductos">
                <div className="item item1">
                    <Link to="/detalle">
                        <img src={sombrasPT2} alt="Sombras Major Dimension Eye Illusion de Patrick Ta"/>
                    </Link>
                    <h3>Patrick Ta</h3>
                    <p className="nombre">Sombras Major Dimension Eye Illusion</p>
                    <p className="precio">$42.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item2">
                    <Link to="/detalle">
                        <img src={sombrasDior} alt="Paleta de Sombras Diorshow"/>
                    </Link>
                    <h3>Dior Beauty</h3>
                    <p className="nombre">Paleta de Sombras Diorshow 5 Couleurs Couture</p>
                    <p className="precio">$72.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item3">
                    <Link to="/detalle">
                        <img src={sombrasMario} alt="Paleta Master Mattes"/>
                    </Link>
                    <h3>Make-Up by Mario</h3>
                    <p className="nombre">Sombra de Ojos Master Mattes®</p>
                    <p className="precio">$59.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item4">
                    <Link to="/detalle">
                        <img src={sombrasCT} alt="Paleta Luxury Eyeshadow"/>
                    </Link>
                    <h3>Charlotte Tilbury</h3>
                    <p className="nombre">Paleta de Sombras Luxury Eyeshadow</p>
                    <p className="precio">$55.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item5">
                    <Link to="/detalle">
                        <img src={sombrasPT} alt="Paleta Major Dimension III"/>
                    </Link>
                    <h3>Patrick Ta</h3>
                    <p className="nombre">Paleta de Sombras Major Dimension III Matte</p>
                    <p className="precio">$70.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
            </div>      
        </section>
    );
}

export default Categoria;