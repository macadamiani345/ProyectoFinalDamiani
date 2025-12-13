import baseCT from "../assets/img/products/bases/baseCT.jpg";
import baseCT2 from "../assets/img/products/bases/baseCT2.jpg";
import baseDior from "../assets/img/products/bases/baseDior.jpg";
import baseDior2 from "../assets/img/products/bases/baseDior2.jpg";
import baseMario from "../assets/img/products/bases/baseMario.jpg";
import basePT from "../assets/img/products/bases/basePT.jpg";
import baseRB2 from "../assets/img/products/bases/baseRB2.jpg";

import bronzerCT from "../assets/img/products/bronzers/bronzerCT.jpg";
import bronzerDior from "../assets/img/products/bronzers/bronzerDior.jpg";
import bronzerMario from "../assets/img/products/bronzers/bronzerMario.jpg";
import bronzerMario3 from "../assets/img/products/bronzers/bronzerMario3.jpg";
import bronzerRB from "../assets/img/products/bronzers/bronzerRB.jpg";
import bronzerRB2 from "../assets/img/products/bronzers/bronzerRB2.jpg";

import correctorCT from "../assets/img/products/correctores/correctorCT.jpg";
import correctorDior from "../assets/img/products/correctores/correctorDior.jpg";
import correctorDior2 from "../assets/img/products/correctores/correctorDior2.jpg"; 
import correctorMario from "../assets/img/products/correctores/correctorMario.jpg";
import correctorRB from "../assets/img/products/correctores/correctorRB.jpg";

import ruborCT from "../assets/img/products/rubores/ruborCT.jpg";
import ruborDior from "../assets/img/products/rubores/ruborDior.jpg";
import ruborMario from "../assets/img/products/rubores/ruborMario.jpg";
import ruborMario2 from "../assets/img/products/rubores/ruborMario2.jpg";
import ruborMario3 from "../assets/img/products/rubores/ruborMario3.jpg";
import ruborRB from "../assets/img/products/rubores/ruborRB.jpg";
import ruborRB2 from "../assets/img/products/rubores/ruborRB2.jpg";

import sombrasCT from "../assets/img/products/sombras/sombrasCT.jpg";
import sombrasDior from "../assets/img/products/sombras/sombrasDior.jpg";
import sombrasMario from "../assets/img/products/sombras/sombrasMario.jpg";
import sombrasPT from "../assets/img/products/sombras/sombrasPT.jpg";
import sombrasPT2 from "../assets/img/products/sombras/sombrasPT2.jpg";

const products = [
    // --- BASES ---
    { id: 1, name: "Base Flawless Filter", brand: "Charlotte Tilbury", price: 49.00, img: baseCT, category: "bases, mas-vendidos" },
    { id: 2, name: "Base Airbrush Flawless", brand: "Charlotte Tilbury", price: 46.00, img: baseCT2, category: "bases" },
    { id: 3, name: "Base Backstage Face & Body", brand: "Dior Beauty", price: 45.00, img: baseDior, category: "bases, nuevos" },
    { id: 4, name: "Base Forever Skin Glow", brand: "Dior Beauty", price: 55.00, img: baseDior2, category: "bases" },
    { id: 5, name: "Base SurrealSkin", brand: "Make-Up by Mario", price: 42.00, img: baseMario, category: "bases" },
    { id: 6, name: "Base Skin Finish", brand: "Patrick Ta", price: 52.00, img: basePT, category: "bases" },
    { id: 7, name: "Base Liquid Touch", brand: "Rare Beauty", price: 30.00, img: baseRB2, category: "bases" },

    // --- BRONZERS ---
    { id: 8, name: "Bronzer Beautiful Skin", brand: "Charlotte Tilbury", price: 58.00, img: bronzerCT, category: "bronzers, nuevos" },
    { id: 9, name: "Bronzer Forever Natural", brand: "Dior Beauty", price: 50.00, img: bronzerDior, category: "bronzers" },
    { id: 10, name: "Bronzer SoftSculpt", brand: "Make-Up by Mario", price: 36.00, img: bronzerMario, category: "bronzers" },
    { id: 11, name: "Bronzer SoftSculpt Stick", brand: "Make-Up by Mario", price: 34.00, img: bronzerMario3, category: "bronzers" },
    { id: 12, name: "Bronzer Warm Wishes", brand: "Rare Beauty", price: 28.00, img: bronzerRB, category: "bronzers, mas-vendidos" },
    { id: 13, name: "Bronzer Stick Good Energy", brand: "Rare Beauty", price: 28.00, img: bronzerRB2, category: "bronzers" },

    // --- CORRECTORES ---
    { id: 14, name: "Corrector Beautiful Skin", brand: "Charlotte Tilbury", price: 35.00, img: correctorCT, category: "correctores" },
    { id: 15, name: "Corrector Backstage", brand: "Dior Beauty", price: 32.00, img: correctorDior, category: "correctores, mas-vendidos" },
    { id: 16, name: "Corrector Forever Skin", brand: "Dior Beauty", price: 40.00, img: correctorDior2, category: "correctores" },
    { id: 17, name: "Corrector SurrealSkin", brand: "Make-Up by Mario", price: 29.00, img: correctorMario, category: "correctores, nuevos" },
    { id: 18, name: "Corrector Liquid Touch", brand: "Rare Beauty", price: 24.00, img: correctorRB, category: "correctores" },

    // --- RUBORES ---
    { id: 19, name: "Rubor Matte Beauty", brand: "Charlotte Tilbury", price: 42.00, img: ruborCT, category: "rubores, nuevos" },
    { id: 20, name: "Rubor Rosy Glow", brand: "Dior Beauty", price: 40.00, img: ruborDior, category: "rubores" },
    { id: 21, name: "Rubor Soft Pop Powder", brand: "Make-Up by Mario", price: 30.00, img: ruborMario, category: "rubores" },
    { id: 22, name: "Rubor Soft Pop Plumping", brand: "Make-Up by Mario", price: 30.00, img: ruborMario2, category: "rubores" },
    { id: 23, name: "Rubor Soft Pop Stick", brand: "Make-Up by Mario", price: 32.00, img: ruborMario3, category: "rubores" },
    { id: 24, name: "Rubor Líquido Soft Pinch", brand: "Rare Beauty", price: 25.00, img: ruborRB, category: "rubores, mas-vendidos" },
    { id: 25, name: "Rubor Melting Blush", brand: "Rare Beauty", price: 24.00, img: ruborRB2, category: "rubores" },

    // --- SOMBRAS ---
    { id: 26, name: "Paleta Luxury Palette", brand: "Charlotte Tilbury", price: 55.00, img: sombrasCT, category: "sombras" },
    { id: 27, name: "Paleta 5 Couleurs", brand: "Dior Beauty", price: 65.00, img: sombrasDior, category: "sombras" },
    { id: 28, name: "Sombra Master Mattes", brand: "Make-Up by Mario", price: 59.00, img: sombrasMario, category: "sombras, mas-vendidos" },
    { id: 29, name: "Sombras Major Dimension III", brand: "Patrick Ta", price: 70.00, img: sombrasPT, category: "sombras, nuevos" },
    { id: 30, name: "Sombras Major Dimension II", brand: "Patrick Ta", price: 70.00, img: sombrasPT2, category: "sombras" },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosFiltrados = products.filter(prod => 
                prod.category.includes(category)
            );
            resolve(productosFiltrados);
        }, 500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const found = products.find(p => p.id === Number(id));
            resolve(found || null);
        }, 300);
    });
};