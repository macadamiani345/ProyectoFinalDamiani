import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Carrusel from "./components/Carrusel/Carrusel"
import Extras from "./components/Extras/Extras"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Conoce from "./components/Conoce/Conoce"

function App() {
  return (
    <>
    
      <Header />    
      
      <main>
        <Routes>
        
          <Route path="/" element={
            <>
              <Carrusel />  
              <ItemListContainer greeting="Productos Nuevos" categoryProp="nuevos" />
              <ItemListContainer greeting="Los Más Vendidos" categoryProp="mas-vendidos" />
              <Extras />
            </>
          }/>

          <Route path="/productos" element={ <ItemListContainer greeting="Nuestros Productos" /> }/>

          <Route path="/categoria/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detalle/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/conoce" element={ <Conoce /> }/>
          <Route path="*" element={ <p style={{ textAlign: 'center', margin: '80px 0' }}>404 - Página no encontrada</p> }/>

        </Routes>

      </main>

      <Footer /> 
      
      </>
  )
}

export default App
