import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map(item => (
            <li key={item.id}>
                {item.name} - ${item.price}
            </li>
        ))}
      </ul>
        <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
        <button>Checkout</button>
    </div>
  );
}

export default Checkout;

// TODO: Comments and explanations