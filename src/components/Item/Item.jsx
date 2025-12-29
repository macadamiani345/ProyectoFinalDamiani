import { Link } from 'react-router-dom';
import Button from "../Button/Button.jsx";
import "./Item.css";

const Item = ({ id, name, brand, price, img, agregarAlCarrito }) => {
    const handleClick = () => {
        const producto = { id, name, brand, price, img };
        agregarAlCarrito(producto, 1);
    };
    return (
        <div className="item">
            <Link to={`/detalle/${id}`}>
                <img src={img} alt={name} />
            </Link>
            
            <h3>{brand}</h3>
            <p className="nombre">{name}</p>
            <p className="precio">${price}</p>
            
            <div onClick={handleClick}>
                <Button>Agregar al Carrito</Button>
            </div>
        </div>
    );
};

export default Item;