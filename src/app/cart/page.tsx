"use client"; 
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface CartItem {
  id: string;
  name: string;
  price: number;
}

export default function CartPage({ items }: { items: CartItem[] }) {
  const cartItems = items || []; // Use the passed array or fallback to an empty array
  const dispatch = useDispatch();
  const [isCheckout, setIsCheckout] = useState(false); // State to toggle checkout view

  const total = cartItems.reduce((acc, item) => acc + item.price, 0); // Calculate total price

  const handleCheckout = () => {
    setIsCheckout(true); // Switch to checkout view
  };

  const handleCompletePurchase = () => {
    // Clear the cart and reset checkout state
    dispatch({ type: "CLEAR_CART" });
    setIsCheckout(false);
    alert("Purchase completed!");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">{isCheckout ? "Checkout" : "Your Cart"}</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : isCheckout ? (
        <div>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="border p-2 rounded">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total}</p>
          <button
            onClick={handleCompletePurchase}
            className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
          >
            Complete Purchase
          </button>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  {item.name} - ${item.price}
                </div>
                <button
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold mt-4">Total: ${total}</p>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}