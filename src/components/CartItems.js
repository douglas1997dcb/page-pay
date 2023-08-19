import React from 'react';
import '../style/StyleCartItems.css'
import { HiOutlineTrash } from "react-icons/hi2";


const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    const { name, price, quantity, image } = item;

    return (
        <div className="cart-item">
            <img src={image} alt={name} className='imagem-produto'/>
            <div>
                <div className="item-info">
                    <h4>{name}</h4>
                    <p>Preço: R$ {price.toFixed(2)}</p>
                    <div className='qnt-lixeira'>
                        <div className="item-quantity">
                            <button onClick={() => onDecrease(item)} >-</button>
                            <span className="item-quantity">{quantity}</span>
                            <button onClick={() => onIncrease(item)}>+</button>
                        </div>
                        <button onClick={() => onRemove(item)} className='bnt-lixeira'> <HiOutlineTrash /> </button>
                    </div>
                </div>
                <div className="item-total"><b>Total: R$ {(price * quantity).toFixed(2)}</b></div>
            </div>
        </div>
    );
};

export default CartItem;
