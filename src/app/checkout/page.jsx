import React from "react";
import { useCart } from "../components/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold mt-4">Total: ${total}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Complete Purchase
      </button>
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