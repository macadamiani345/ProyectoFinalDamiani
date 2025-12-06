import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Carrusel from "./components/Carrusel/Carrusel"
import Extras from "./components/Extras/Extras"
import ProductBox from "./components/ProductBox/ProductBox"
import ProductBox2 from "./components/ProductBox2/ProductBox2"
import Categoria from './components/Categoria/Categoria'
import Details from './components/Details/Details.jsx'
import Conoce from './components/Conoce/Conoce.jsx'

function App() {
  return (
    <>
    
      <Header />    
      
      <main>
        <Routes>
        
          <Route path="/" element={
            <>
              <Carrusel />
              <ProductBox />
              <ProductBox2 />
              <Extras />
            </>
          }/>

          <Route path="/categoria" element={ <Categoria /> }/>
          <Route path="/detalle" element={ <Details /> }/>
          <Route path="/conoce" element={ <Conoce /> }/>

        </Routes>

      </main>

      <Footer /> 
      
      </>
  )
}

export default App
