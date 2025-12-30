import { Link } from "react-router-dom";
import carrito from "../../assets/img/carrito.png";
import "./CartWidget.css";
import { useCart } from "../../context/CartContext.jsx";

const CartWidget = () => {
    const { totalCantidad } = useCart();
    return (
        <Link to="/carrito" className="cart-widget">
            <img src={carrito} alt="Ícono de carrito de compras" width="25" height="25" />
            {totalCantidad > 0 && <span className="cart-badge">{totalCantidad}</span>}
        </Link>
    );
};

export default CartWidget;
