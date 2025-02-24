import { CartProvider } from './CartContext';
import Item from './Item';
import Cart from './Cart';
import React from 'react'

export default function Task_h() {
    const items = [
        { id: 1, name: 'Laptop', price: 1200 },
        { id: 2, name: 'Headphones', price: 150 },
        { id: 3, name: 'Mouse', price: 30 },
    ];
    return (
        <>
            {/* --------------------------------------- */}
            < CartProvider >
                <div>
                    <h1>Shopping Cart</h1>
                    <div>
                        {items.map((item) => (
                            <Item key={item.id} item={item} />
                        ))}
                    </div>
                    <Cart />
                </div>
            </CartProvider >
            {/* --------------------------------------- */}
        </>
    )
}
