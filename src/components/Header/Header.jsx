import "./Header.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <section>
                <p>El secreto de la belleza es ser tú misma</p>
            </section>

            <section className="variosEncabezado">
                <div className="contenedor">
                    <div className="fuenteLogo">
                        <Link to="/"><h1>Beauty Bar</h1></Link>
                    </div>
                    <div className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">
                                    <i className="bi bi-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </section>
                    
            <section>
                <nav>
                    <ul>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/tienda">Tienda</Link></li>
                        <li><Link to="/tutoriales">Tutoriales</Link></li>
                        <li><Link to="/conoce">Conoce Beauty Bar</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Header;