import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Task_h.css'

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className='your-cart'>
      <h2>Cart</h2>
      {state.items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul className='your-cart-ul'>
          {state.items.map((item) => (
            <li key={item.id} style={{display:"flex" , justifyContent:"space-evenly"}}>
             <h3>Item Name : {item.name}</h3> 
             <p>Price:${item.price}</p>
              <button onClick={() => handleRemoveItem(item)} style={{backgroundColor:"green",color:"white"}}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {state.items.length > 0 && (
        <button onClick={handleClearCart} style={{backgroundColor:"red" , color:"white" }}>Clear Cart</button>
      )}
    </div>
  );
}

export default Cart;