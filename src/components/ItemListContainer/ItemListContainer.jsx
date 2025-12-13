import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../Data/mockData';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting, categoryProp }) => { 
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    const categoryToFilter = categoryProp || categoryId;

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
            <ItemList products={products} />
        </section>
    );
};

export default ItemListContainer;