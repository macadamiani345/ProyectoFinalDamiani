import { Link } from 'react-router-dom';
import Button from "../Button/Button"; 
import "./ItemDetail.css"; 

const ItemDetail = ({ name, brand, price, img, description, category}) => {
    const mainCategory = category.split(',')[0].trim();
    
    return (
        <div className="container-detalle">
            
            <Link to={`/categoria/${mainCategory}`} className="btn-volver">
                ← Volver a la categoría {mainCategory}
            </Link>

            <div className="detalle-wrapper">
                <div className="detalle-imagen">
                    <img src={img} alt={name} />
                </div>
                <div className="detalle-info">
            
                    <span>{brand}</span>
                    
                    <h1 className="nombre">{name}</h1>
            
                    <p className="precio">${price}</p>

                    <p className="descripcion">
                        {description ? description : "Descripción detallada próximamente..."}
                    </p>

                    <hr className="divisor" />

                    <div className="contenedor-boton">
                        <Button>Agregar al Carrito</Button>
                    </div>
            
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;