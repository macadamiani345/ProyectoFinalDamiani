import "./Tutoriales.css";

function Tutoriales() { 
    return (
        <section className="contenedorTutoriales aparecerArriba">
            <div className="grid item1 video">
                <iframe width="350" height="250" src="https://www.youtube.com/embed/fB1uhbBGUG0?si=rrYJPdGhTxWNH60Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>Aprende a maquillarte con Selena Gómez y los productos de su marca Rare Beauty</p>
            </div>
            <div className="grid item2 video">
                <iframe width="350" height="250" src="https://www.youtube.com/embed/CgRlC8DsOdQ?si=v9W-Ui_LMpqePSin" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>¿No sabes cómo maquillarte los ojos? Mario te lo enseña muy rápido con sus productos</p>
            </div>
            <div className="grid item3 video">
                <iframe width="350" height="250" src="https://www.youtube.com/embed/-2eQD-CGu2I?si=oWbflqAAa6YpWvXB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>Aprende a maquillarte con los productos de Charlotte Tilbury</p>
            </div>
            <div className="grid item4 video">
                <iframe width="350" height="250" src="https://www.youtube.com/embed/WNLOv6wm-0I?si=7OhgRWcxiRBucYOz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>Hazte un maquillaje para la universidad en menos de 5 minutos</p>
            </div>
            <div className="grid item5 video">
                <iframe width="350" height="250" src="https://www.youtube.com/embed/38fS5BrDxQU?si=0hqoywj_nkDcDnig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>¿Conoces los diferentes tipos de rubores? Aprende cuales son y como aplicarlos</p>
            </div>
            <div className="grid item6 video">
                <iframe width="350" height="250" src="https://www.youtube.com/embed/u283rUo_Rw4?si=9tR7M4-nJ0cUi7ud" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p>¿Quieres tener un maquillaje glowy? Aprende a resaltar los puntos en tu rostro para obtenerlo</p>
            </div>
        </section>
    );
}

export default Tutoriales;  