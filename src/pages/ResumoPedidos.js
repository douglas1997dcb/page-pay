import CartItem from '../components/CartItems';
import '../style/StyleResumoPedidos.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importe o Axios para fazer requisições HTTP

const ResumoPedidos = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fazer uma solicitação para buscar os dados
        axios.get("https://64d2e42d67b2662bf3db7edf.mockapi.io/v1/listcar/products").then(response => {
            setCartItems(response.data); // Atualizar o estado com os dados
        })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
            })
    }, []);

    const handleIncrease = (item) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedCartItems);
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            );
            setCartItems(updatedCartItems);
        }
    };

    const handleRemove = (item) => {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="shopping-cart">
            <h2>Carrinho de Compras</h2>
            {cartItems.length === 0 ? (
                <p>Carrinho vazio</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            onRemove={handleRemove}
                        />
                    ))}
                    <div className="cart-total"><h3>Total do carrinho: R$ {calculateTotal().toFixed(2)}</h3></div>
                </>
            )}
        </div>
    );
};

export default ResumoPedidos;