import "./Form.css"

function Form(){
    return (
        <form method="post" action="">
            <input type="email" 
            id="subscribe-email" 
            placeholder="Ingrese su email..." 
            aria-label="Suscribirse al boletín" />
            <button type="submit">OK</button>
        </form>
    )
}

export default Form;