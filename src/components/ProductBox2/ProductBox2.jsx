import "../ProductBox/ProductBox.css";
import ruborRB from "../../assets/img/products/rubores/ruborRB.jpg";
import correctorDior from "../../assets/img/products/correctores/correctorDior.jpg";
import sombrasMario from "../../assets/img/products/sombras/sombrasMario.jpg";
import bronzerRB from "../../assets/img/products/bronzers/bronzerRB.jpg";
import baseCT from "../../assets/img/products/bases/baseCT.jpg";
import Button from "../Button/Button.jsx";

function ProductBox2(){
    return(
        <section className="alineacionProductos">
            <h2>Los Más Vendidos</h2>
            <div className="contenedorProductos">
                <div className="item item1">
                    <img src= {ruborRB} alt="Rubor Soft Pinch de Rare Beauty"/>
                    <h3>Rare Beauty</h3>
                    <p className="nombre">Rubor Líquido Soft Pinch</p>
                    <p className="precio">$25.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item2">
                    <img src= {correctorDior} alt="Corrector Backstage de Dior Beauty"/>
                    <h3>Dior Beauty</h3>
                    <p className="nombre">Corrector Backstage</p>
                    <p className="precio">$32.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item3">
                    <img src= {sombrasMario} alt="Paleta Master Mattes de Make-Up by Mario"/>
                    <h3>Make-Up by Mario</h3>
                    <p className="nombre">Sombra de Ojos Master Mattes®</p>
                    <p className="precio">$59.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item4">
                    <img src= {bronzerRB} alt="Bronceador Warm Wishes de Rare Beauty"/>
                    <h3>Rare Beauty</h3>
                    <p className="nombre">Bronzer en Crema Warm Wishes Effortless</p>
                    <p className="precio">$28.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
                <div className="item item5">
                    <img src= { baseCT } alt="Base Hollywood Flawless Filter de Charlotte Tilbury"/>
                    <h3>Charlotte Tilbury</h3>
                    <p className="nombre">Base Flawless Filter</p>
                    <p className="precio">$49.00</p>
                    <Button>Agregar al Carrito</Button>
                </div>
            </div>      
        </section>
    )
}
export default ProductBox2;