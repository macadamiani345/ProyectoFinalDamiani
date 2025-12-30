import "./Carrito.css";
import { Link } from "react-router-dom";

function Carrito({ 
    carrito, 
    eliminarProducto, 
    vaciarCarrito, 
    totalPrecio, 
    aumentarCantidad, 
    disminuirCantidad,
}) {

    return (
        <section className="resumenCompra">
        <div className="listadoProductosCarrito">
            <h2>Resumen</h2>
            
            {carrito.length === 0 ? (
                <div className="carrito-vacio">
                    <p>No tienes productos en el carrito.</p>
                    <Link to="/" className="btn-volver">Ir a la tienda</Link>
                </div>
            ) : (
                <>
                    <ul className="lista-carrito">
                    {carrito.map((prod) => (
                        <li key={prod.id} className="item-carrito">
                        <span className="nombre-prod">{prod.name}</span>
                        
                        <div className="controles-cantidad">
                            <button onClick={() => disminuirCantidad(prod.id)}>-</button>
                            <span className="cantidad">{prod.cantidad}</span>
                            <button onClick={() => aumentarCantidad(prod.id)}>+</button>
                        </div>

                        <span className="precio-prod">${(prod.price * prod.cantidad).toFixed(2)}</span>
                        
                        <button 
                            className="btn-eliminar"
                            onClick={() => eliminarProducto(prod.id)}
                        >
                            🗑️
                        </button>
                        </li>
                    ))}
                    </ul>
                    
                    <button onClick={vaciarCarrito} className="btn-vaciar">
                        Vaciar Carrito
                    </button>
                </>
            )}
        </div>

        {carrito.length > 0 && (
            <div className="totalCompraCarrito">
                <p>Total: ${totalPrecio.toFixed(2)}</p>
                <Link to="/checkout" className="btn-comprar">Ir al Checkout</Link>
            </div>
        )}
        </section>
    );
}

export default Carrito;