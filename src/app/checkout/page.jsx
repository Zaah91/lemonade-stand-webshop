/*
import React from 'react';

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
*/
import React from "react";
import { cart } from "../components/cart";
import Layout from "..//layout";

export default function Checkout() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
    </div>
  );
}

//export default Checkout;

/*
<ul>
        {cart.map(item => (
            <li key={item.id}>
                {item.name} - ${item.price}
            </li>
        ))}
      </ul>
        <p>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
        <button>Checkout</button>
    
*/

// TODO: Comments and explanations