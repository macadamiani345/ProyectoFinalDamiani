import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../Data/mockData';
import ItemList from '../ItemList/ItemList';
import { useParams, useNavigate, Link } from 'react-router-dom';
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, categoryProp, showCategoryFilter = false, agregarAlCarrito }) => { 
    const [products, setProducts] = useState([]);
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
        "mas-vendidos",
    ];

    const getGreeting = () => {
        if (greeting) return greeting; 
        if (categoryToFilter) {
            return `Colección:  ${categoryToFilter}`;
        }
        return "Nuestros Productos";
    };

    useEffect(() => {
        const asyncFunc = categoryToFilter ? getProductsByCategory : getProducts;

        asyncFunc(categoryToFilter)
            .then(res => setProducts(res))
            .catch(err => console.error(err));

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
            <ItemList products={products} agregarAlCarrito={agregarAlCarrito} />
        </section>
    );
};

export default ItemListContainer;