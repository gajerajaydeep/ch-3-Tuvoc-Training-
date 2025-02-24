import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Task_h.css'

function Item({ item }) {
    const { dispatch } = useContext(CartContext);

    const handleAddItem = () => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    return (
        <>
            <div className='cart-item'>
                <h2> {item.name}- ${item.price}</h2>
                <button onClick={handleAddItem} style={{backgroundColor:"blue" , color:"white" , borderRadius:"5px" }}>Add to Cart</button>
            </div>
            {/* <button onClick={handleAddItem} style={{backgroundColor:"blue" , color:"white" , borderRadius:"5px" }}>Add to Cart</button> */}
        </>
    );
}

export default Item;