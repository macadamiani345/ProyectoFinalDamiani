import "./Footer.css"
import Form from "../Form/Form";    

function Footer(){
    return (
        <footer>
            <div className="footerContenedor">
                <div className="footerRow">

                    <div className="footerCol">
                        <h2>Servicio al cliente</h2>
                        <p>
                            Horario: Lunes a Viernes <br />
                            9:00am a 6:00pm <br />
                            info@BeautyBar.com
                        </p>
                    </div>
            
                    <div className="footerCol">
                        <h2>Información</h2>
                        <p>
                            Beauty Bar S.A.<br />
                            Representante: Guillermo Alejandro Crespo<br />
                            Dirección: Avenida San Martin 54, Ciudad, Mendoza, Argentina.<br />
                            Teléfono: +54 9 2604 734567
                        </p>
                    </div>
                
                    <div className="footerCol formCol">
                        <h2>Suscribirse</h2>
                        <p>
                            Registra tu email para unirte a la comunidad Beauty Bar
                            y enterarte de promociones, lanzamientos y más!
                        </p>
                        <Form />    
                    </div>
                    
                </div>
    
                <div className="footerFinal">
                    <p>© Copyright 2024 Beauty Bar. Todos los derechos reservados.</p>
                </div>
            </div> 
        </footer>
    )
}

export default Footer;