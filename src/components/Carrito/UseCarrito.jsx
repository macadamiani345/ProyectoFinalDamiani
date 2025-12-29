import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const useCarrito = () => {
    const [carrito, setCarrito] = useState(() => {
        const guardado = localStorage.getItem("carrito");
        return guardado ? JSON.parse(guardado) : [];
    });

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarProducto = (item, cantidad) => {
        const encontrado = carrito.find(p => p.id === item.id);
        if (encontrado) {
            setCarrito(carrito.map(p => p.id === item.id ? { ...p, cantidad: p.cantidad + cantidad } : p));
        } else {
            setCarrito([...carrito, { ...item, cantidad }]);
        }
        Swal.fire({
            toast: true, position: 'top-end', icon: 'success',
            title: `${item.name} añadido`, showConfirmButton: false, timer: 1500
        });
    };

    const aumentarCantidad = (id) => {
        setCarrito(carrito.map(p => p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p));
    };

    const disminuirCantidad = (id) => {
        const producto = carrito.find(p => p.id === id);
        if (producto.cantidad > 1) {
            setCarrito(carrito.map(p => p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p));
        } else {
            eliminarProducto(id); 
        }
    };

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(p => p.id !== id));
        Swal.fire({
            toast: true, position: 'top-end', icon: 'info',
            title: 'Producto eliminado', showConfirmButton: false, timer: 1000
        });
    };

    const vaciarCarrito = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Se eliminarán todos los artículos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCarrito([]);
                Swal.fire('¡Vaciado!', 'Tu carrito está vacío.', 'success');
            }
        });
    };

    const comprar = () => {
        if (carrito.length === 0) {
            Swal.fire('Error', 'El carrito está vacío', 'warning');
            return;
        }
        
        setCarrito([]);
        Swal.fire({
            icon: 'success',
            title: '¡Compra Exitosa!',
            html: '<h3>¡Gracias por tu compra!</h3><p>Tu pedido será procesado pronto.</p>',
        });
    };

    const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrecio = carrito.reduce((acc, item) => acc + (item.cantidad * item.price), 0); // Asegúrate que sea .price o .precio según tu data

    return {
        carrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        totalCantidad,
        totalPrecio,
        aumentarCantidad,   
        disminuirCantidad, 
        comprar            
    };
};