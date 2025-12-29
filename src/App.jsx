import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Carrusel from "./components/Carrusel/Carrusel"
import Extras from "./components/Extras/Extras"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Conoce from "./components/Conoce/Conoce"
import Carrito from "./components/Carrito/Carrito"
import { useCarrito } from './components/Carrito/UseCarrito';

function App() {

  const { 
    carrito, 
    agregarProducto, 
    eliminarProducto, 
    vaciarCarrito, 
    totalCantidad, 
    totalPrecio,
    aumentarCantidad,  
    disminuirCantidad, 
    comprar           
  } = useCarrito();

  return (
    <>
    
      <Header totalItems={totalCantidad} />    
      
      <main>
        <Routes>
        
          <Route path="/" element={
            <>
              <Carrusel />  
              <ItemListContainer greeting="Productos Nuevos" categoryProp="nuevos" agregarAlCarrito={agregarProducto} />
              <ItemListContainer greeting="Los Más Vendidos" categoryProp="mas-vendidos" agregarAlCarrito={agregarProducto}/>
              <Extras />
            </>
          }/>

          <Route path="/productos" element={ <ItemListContainer greeting="Nuestros Productos" showCategoryFilter agregarAlCarrito={agregarProducto} />}/>

          <Route path="/categoria/:categoryId" element={ <ItemListContainer agregarAlCarrito={agregarProducto} />}/>
          <Route path="/detalle/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/conoce" element={ <Conoce /> }/>

          <Route path="/carrito" element={ 
            <>
            <Carrito 
              carrito={carrito}
              eliminarProducto={eliminarProducto}
              vaciarCarrito={vaciarCarrito}
              totalPrecio={totalPrecio}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
              comprar={comprar}
            />
            <ItemListContainer greeting="Los Más Vendidos" categoryProp="mas-vendidos" agregarAlCarrito={agregarProducto} />
            </>
          }/>

          <Route path="*" element={ <p style={{ textAlign: 'center', margin: '80px 0' }}>404 - Página no encontrada</p> }/>

        </Routes>

      </main>

      <Footer /> 
      
      </>
  )
}

export default App
