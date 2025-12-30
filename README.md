# ProyectoFinal – Beauty Bar (React + Vite)

Single Page Application (SPA) de e-commerce desarrollada con React y Vite. Implementa listado y detalle de productos, carrito de compras con Context API, navegación con React Router, y flujo de checkout. 

## Características
- Catálogo dinámico: `ItemListContainer`, `ItemList`, `Item`
- Detalle de producto: `ItemDetailContainer`, `ItemDetail`
- Selección de cantidad con validaciones: `ItemCount`
- Carrito con Context: `CartContext` y `CartProvider`
- CartWidget con contador global de unidades
- Navegación SPA con React Router: Home, Productos, Categorías, Detalle, Carrito, Checkout
- Renderizado condicional para estados (cargando, carrito vacío, etc.)


## Estructura principal
- `src/App.jsx`: Rutas y layout
- `src/main.jsx`: Montaje y `CartProvider`
- `src/context/CartContext.jsx`: Estado global del carrito
- `src/components/CartWidget/CartWidget.jsx`: Icono del carrito con contador
- `src/components/Carrito/Carrito.jsx`: Vista del carrito
- `src/components/CheckoutForm/CheckoutForm.jsx`: Formulario de checkout
- `src/components/ItemListContainer/ItemListContainer.jsx`: Catálogo y filtros
- `src/components/ItemDetailContainer/ItemDetailContainer.jsx`: Detalle de producto

## Instalación y ejecución

```bash
npm install
npm run dev
```

Accede a http://localhost:5173 (puede variar según Vite).


