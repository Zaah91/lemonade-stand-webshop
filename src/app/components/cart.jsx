import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

function Cart(){
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div>
          <h1>Cart</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  {item.name} - ${item.price}
                  <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          <Link href="/checkout">Proceed to Checkout</Link>
        </div>
      );
    }
    
export default Cart;

// TODO: Comments and explanations