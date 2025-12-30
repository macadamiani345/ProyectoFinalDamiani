import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../FirebaseConfig';
import ItemList from '../ItemList/ItemList';
import { useParams, useNavigate, Link } from 'react-router-dom';
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, categoryProp, showCategoryFilter = false, agregarAlCarrito }) => { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const categoryToFilter = categoryProp || categoryId;
    const categories = [
        "bases",
        "bronzers",
        "correctores",
        "rubores",
        "sombras",
        "nuevos",
    ];

    const getGreeting = () => {
        if (greeting) return greeting; 
        if (categoryToFilter) {
            return `Colección:  ${categoryToFilter}`;
        }
        return "Nuestros Productos";
    };

    useEffect(() => {
        setLoading(true);
        const asyncFunc = categoryToFilter ? getProductsByCategory : getProducts;

        asyncFunc(categoryToFilter)
            .then(res => {
                setProducts(res);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });

    }, [categoryToFilter]);

    return (
        <section className="alineacionProductos">
            <h2>{getGreeting()}</h2>
            {categoryId && (
                <div style={{ textAlign: 'center', margin: "10px 0" }}>
                    <Link to="/productos" className="back-link">
                        ← Volver a todos los productos
                    </Link>
                </div>
            )}
            {showCategoryFilter && (
                <div className="category-filter-container">
                    <label htmlFor="category-select">
                        Ver por categoría:
                    </label>
                    <select
                        id="category-select"
                        className="category-select"
                        defaultValue=""
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value) navigate(`/categoria/${value}`);
                        }}
                    >
                        <option value="" disabled>Elegí una categoría</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            )}
            {loading ? (
                <p style={{textAlign:'center', margin:'50px 0', fontSize:'18px'}}>Cargando productos...</p>
            ) : (
                <ItemList products={products} agregarAlCarrito={agregarAlCarrito} />
            )}
        </section>
    );
};

export default ItemListContainer;