import Item from '../Item/Item';
import "./ItemList.css";

const ItemList = ({ products, agregarAlCarrito }) => {
    return (
        <div className="contenedorProductos">
            {products.map((prod) => (
                <Item key={prod.id} {...prod} agregarAlCarrito={agregarAlCarrito} />
            ))}
        </div>
    );
};

export default ItemList;