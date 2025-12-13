import { Link } from 'react-router-dom';
import Button from "../Button/Button.jsx";
import "./Item.css";

const Item = ({ id, name, brand, price, img }) => {
    return (
        <div className="item">
            <Link to={`/detalle/${id}`}>
                <img src={img} alt={name} />
            </Link>
            
            <h3>{brand}</h3>
            <p className="nombre">{name}</p>
            <p className="precio">${price}</p>
            
            <Button>Agregar al Carrito</Button>
        </div>
    );
};

export default Item;