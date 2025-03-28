import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  //description: string;
  image: string;
}

export default async function Home() {
  let products: Product[] = [];
  
try{
// Fetch data from an API
const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemonade");

if (!res.ok) { // Check if response is successful
  throw new Error("Failed to fetch products");
}

const data = await res.json();
products = data.drinks.map((drink: any) => ({
id: drink.idDrink,
name: drink.strDrink,
image: `${drink.strDrinkThumb}/small`, // Use small image size
price: 10, // Default price
//price: Math.floor(Math.random() * 10) + 5, // Random price between 5 and 15
//description: "A refreshing drink",
}));
} catch (error) {
console.error(error);
products = []; // Reset products to empty array
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
            <p className="text-gray-600">{/*product.description*/}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <Link
              href={`/cart?product=${product.id}`}
              className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}