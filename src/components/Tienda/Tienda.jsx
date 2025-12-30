import "./Tienda.css";
import imagenTienda from "../../assets/img/tienda.jpg";

function Tienda() { 
    return (
        <section className="ubicacion">
            <div className="contenedorTienda"> 
                <div className="info aparecerIzquierda">
                    <p>
                        <strong>Av. San Martín Sur 2675 Local B35</strong>, 
                        M5501 Godoy Cruz, Mendoza.<br/>
                        <strong>Teléfono:</strong> (54) 9 2604 467789<br/>
                        <strong>Horario:</strong> Lunes a Domingo y Feriado: 10:00am - 8:00pm<br/>
                    </p>
                    <img src={imagenTienda} alt="Imagen de la tienda"/>
                </div>
                <div className="mapa aparecerDerecha">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.8608009035447!2d-71.629633!3d-35.433478099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c795911c4cc9%3A0xc73fb7343c97ca0!2sBlush-Bar%20Talca!5e0!3m2!1ses-419!2sar!4v1758749458871!5m2!1ses-419!2sar" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>              
            </div>
        </section>
    );
}

export default Tienda;  