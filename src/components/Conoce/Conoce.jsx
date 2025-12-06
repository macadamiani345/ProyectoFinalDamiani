import "./Conoce.css";
import fundadoraImg from "../../assets/img/fundadora.jpg";
import historiaImg from "../../assets/img/imagenhistoria.jpg";

function Conoce(){
    return(
        <section class="aparecerAbajo">
            <section class="primeraYTerceraTabla">
                <div class="fila">
                    <div class="columnaTexto">
                        <h2>¿QUÉ ES BEAUTY BAR?</h2>
                        <p>Beauty Bar es un retailer de cosméticos en Argentina que ofrece un portafolio de las mejores marcas del mundo. Fue fundado por una mujer en 2015 y creado para mujeres y todos los que aman estos productos!</p>
                    </div>
                    <div class="columnaImagen">
                        <img src={fundadoraImg} alt="Fotografía de la fundadora" width="150px"/>
                    </div>
                </div>
            </section>
        
            <section class="segundaTabla">
                <div>
                    <p><span>1</span> El secreto de la belleza es ser tú misma. Beauty Bar nunca 
                        trata de cambiar a nadie, creemos que cada mujer es linda y que 
                        su aspiración es ser la mejor versión de ella misma. Nos encanta 
                        la individualidad y creemos que el maquillaje y el cuidado de 
                        piel son parte de tu propia expresión.</p>
                </div>
                <div>
                    <p><span>2</span> La calidad de los productos es clave para tener los mejores resultados. 
                        Por eso, en nuestro portafolio jamás verás una marca que no sea 
                        excelente desde todo punto de vista. Tenemos el compromiso de siempre 
                        innovar nuestro portafolio de marcas con marcas nuevas! Queremos 
                        siempre ofrecerte lo mejor!</p>
                </div>
                <div>
                    <p><span>3</span> La compra de cosméticos debe ser un absoluto placer. Debe ser un 
                        momento de consentirte a ti misma (o a alguien que quieres mucho). 
                        Por eso hemos creado una tienda linda, femenina y llena de sorpresas 
                        para ti. Tu experiencia en nuestra tienda Online también estará 
                        llena de detalles lindos y rosados, siempre queremos darte una sonrisa.</p>
                </div>
            </section>
        
            <section class="primeraYTerceraTabla">
                <div class="fila">
                    <div class="columnaTexto">
                        <h2>HISTORIA DE BEAUTY BAR</h2>
                        <p>Había una vez una niña que amaba el maquillaje y el color rosado. Se sentaba 
                            en el tocador de su abuela Carmen, a jugar con sus polvos, labiales y perfumes!
                            La niña creció, trabajó en compañías de maquillaje y viajó por el mundo. Años 
                            después le dijo un día a su esposo: “Voy a crear un lugar rosado con las mejores 
                            marcas de maquillaje, piel y perfumes. Donde todas las personas se sientan 
                            bienvenidas. Donde la belleza sea individual. Un emprendimiento con alma y corazón. 
                            Voy a encontrar un equipo de personas soñadoras y crear una marca con integridad!”
                            El esposo le respondió: “Suena lindo pero difícil, pero como siempre, te apoyo!”.
                            Y así nació Beauty Bar!</p>
                    </div>
                    <div class="columnaImagen">
                        <img src={historiaImg} alt="Imagen de la familia fundadora" width="250px"/>
                    </div>
                </div>
            </section>

            <section class="soloCentrar">
                <p><strong>VEN A VISITARNOS, TÓMATE UN MOMENTO PARA DESCUBRIR NUESTRAS MARCAS Y EXPLORAR NUESTRA TIENDA</strong></p>
                <p> XOXO,<br />
                    MACARENA DAMIANI<br />
                    FUNDADORA & DIRECTORA GENERAL
                </p>
            </section>
        </section>
    );
}

export default Conoce;