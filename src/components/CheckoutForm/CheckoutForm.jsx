import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const { carrito, totalPrecio, vaciarCarrito } = useCart();
    const [buyer, setBuyer] = useState({ nombre: '', email: '', telefono: '' });
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyer(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        if (!buyer.nombre || !buyer.email || !buyer.telefono) {
            setError('Completa todos los campos.');
            return false;
        }
        if (!/.+@.+\..+/.test(buyer.email)) {
            setError('Email inválido.');
            return false;
        }
        if (carrito.length === 0) {
            setError('El carrito está vacío.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        
        setLoading(true);
        
        // Simular generación de orden
        setTimeout(() => {
            const mockId = `ORD-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
            setOrderId(mockId);
            vaciarCarrito();
            setLoading(false);
        }, 500);
    };

    return (
        <section className="checkout-container">
        <h2>Checkout</h2>

        {carrito.length > 0 && (
            <div className="checkout-resumen">
            <h3>Resumen de compra</h3>
            <ul>
                {carrito.map(item => (
                <li key={item.id}>
                    <span>{item.name} x {item.cantidad}</span>
                    <span>${(item.price * item.cantidad).toFixed(2)}</span>
                </li>
                ))}
            </ul>
            <p className="total">Total: ${totalPrecio.toFixed(2)}</p>
            </div>
        )}

        {orderId ? (
            <div className="orden-exitosa">
            <h3>¡Compra realizada!</h3>
            <p>Tu ID de orden es:</p>
            <div className="orden-id">{orderId}</div>
            </div>
        ) : (
            <form className="checkout-form" onSubmit={handleSubmit}>
            <label>
                Nombre
                <input name="nombre" value={buyer.nombre} onChange={handleChange} />
            </label>
            <label>
                Email
                <input name="email" value={buyer.email} onChange={handleChange} />
            </label>
            <label>
                Teléfono
                <input name="telefono" value={buyer.telefono} onChange={handleChange} />
            </label>
            {error && <p className="error">{error}</p>}
            <button type="submit" disabled={loading}>
                {loading ? 'Procesando...' : 'Confirmar Compra'}
            </button>
            </form>
        )}
        </section>
    );
};

export default CheckoutForm;
