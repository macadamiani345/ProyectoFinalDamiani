import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"; 

const ItemDetail = ({ id, name, brand, price, img, description, category, stock = 10, agregarAlCarrito}) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const mainCategory = category.split(',')[0].trim();
    
    const handleAdd = (cantidad) => {
        const producto = { id, name, brand, price, img };
        agregarAlCarrito(producto, cantidad);
        setCantidadAgregada(cantidad);
    };
    
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
                        {cantidadAgregada === 0 ? (
                            <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ marginBottom: '15px', color: '#4caf50', fontWeight: 'bold' }}>
                                    ✓ Producto agregado al carrito
                                </p>
                                <Link to="/carrito" className="btn-ir-carrito">
                                    Ir al Carrito
                                </Link>
                                <Link to="/productos" className="btn-seguir-comprando">
                                    Seguir Comprando
                                </Link>
                            </div>
                        )}
                    </div>
            
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;