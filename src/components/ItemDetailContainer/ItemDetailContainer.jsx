import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../Data/mockData";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useCarrito } from "../Carrito/UseCarrito";

const ItemDetailContainer = () => {
    const [product, setProduct]   = useState(null);
    const { itemId } = useParams();
    const { agregarProducto } = useCarrito();

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => console.error(error));
    }, [itemId]);

    return (
        <div>
            {product ? <ItemDetail {...product} agregarAlCarrito={agregarProducto} /> : <p style={{textAlign:'center', marginTop:'50px'}}>Cargando producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;