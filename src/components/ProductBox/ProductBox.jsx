import "./ProductBox.css";
import correctorMario from "../../assets/img/products/correctores/correctormario.jpg";
import ruborCT from "../../assets/img/products/rubores/ruborCT.jpg";
import bronzerCT from "../../assets/img/products/bronzers/bronzerCT.jpg";
import baseDior from "../../assets/img/products/bases/baseDior.jpg";
import sombrasPT from  "../../assets/img/products/sombras/sombrasPT.jpg";
import Button from "../Button/Button.jsx";

function ProductBox() {
    return (
        <section className="alineacionProductos">
                <h2>Productos Nuevos</h2>
                <div className="contenedorProductos"> 
                    <div className="item item1">
                        <img src= {correctorMario} alt="Corrector SurrealSkin de Make-Up by Mario"/>
                        <h3>Make-Up by Mario</h3>
                        <p className="nombre">Corrector SurrealSkin™ Awakening</p>
                        <p className="precio">$29.00</p>
                        <Button>Agregar al Carrito</Button>
                    </div>
                    <div className="item item2">
                        <img src= {ruborCT} alt="Dúo de rubor en crema y polvo Double-Take de Major Headlines"/>
                        <h3>Charlotte Tilbury</h3>
                        <p className="nombre">Rubor Matte Beauty</p>
                        <p className="precio">$42.00</p>
                        <Button>Agregar al Carrito</Button>
                    </div>
                    <div className="item item3">
                        <img src= {bronzerCT} alt="Bronceador Beautiful Skin de Charlotte Tilbury"/>
                        <h3>Charlotte Tilbury</h3>
                        <p className="nombre">Bronzer en Crema Beautiful Skin Sun-Kissed Glow</p>
                        <p className="precio">$58.00</p>
                        <Button>Agregar al Carrito</Button>
                    </div>
                    <div className="item item4">
                        <img src= {baseDior} alt="Base Backstage de Dior Beauty"/>
                        <h3>Dior Beauty</h3>
                        <p className="nombre">Base Backstage Face & Body</p>
                        <p className="precio">$45.00</p>
                        <Button>Agregar al Carrito</Button>
                    </div>
                    <div className="item item5">
                        <img src= {sombrasPT} alt="Paleta de sombras de ojos mate Major Dimension III"/>
                        <h3>Patrick Ta</h3>
                        <p className="nombre">Paleta de Sombras Major Dimension III Matte</p>
                        <p className="precio">$70.00</p>
                        <Button>Agregar al Carrito</Button>
                    </div>
                </div>
            </section>
    );
}

export default ProductBox;