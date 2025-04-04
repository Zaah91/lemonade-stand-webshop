"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to store products
  const [cart, setCart] = useState<Product[]>([]); // Local state for cart
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from an API
        const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemonade");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        const mappedProducts = data.drinks.map((drink: any) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          image: `${drink.strDrinkThumb}/small`, // Use small image size
          price: 10, // Default price
        }));
        setProducts(mappedProducts); // Update state with fetched products
      } catch (error) {
        console.error(error);
        setProducts([]); // Reset products to empty array on error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      if (prevCart.some((item) => item.id === product.id)) {
        return prevCart; // Return the cart unchanged if the product is already present
      }
      return [...prevCart, product]; // Add the product if it's not in the cart
    });
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to the Lemonade Stand!</h1>
        <p className="text-lg mt-2">Fresh and delicious lemonade for every taste.</p>
      </header>
      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <img src={product.image} alt={product.name} className="w-full object-cover mt-4" />
            <p className="text-gray-600">{/* product.description */}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
      <footer className="text-center mt-8">
        <Link href={{ pathname: "/cart", query: { items: JSON.stringify(cart) } }}>
          Go to Cart
        </Link>
      </footer>
    </div>
  );
};

export default Home;