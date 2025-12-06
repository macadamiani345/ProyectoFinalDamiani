import "./Button.css";

function Button({ children }) {
    return (
        <button type="button" className="agregarProductoCarrito">
            {children}
        </button>
    );
}

export default Button;