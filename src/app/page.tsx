import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Classic Lemonade", price: 5, description: "Fresh and tangy lemonade", image: "/images/lemonade.jpg" },
  { id: 2, name: "Strawberry Lemonade", price: 6, description: "Sweet and fruity lemonade", image: "/images/strawberry-lemonade.jpg" },
  { id: 3, name: "Mint Lemonade", price: 6, description: "Refreshing mint-infused lemonade", image: "/images/mint-lemonade.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to the Lemonade Stand!</h1>
        <p className="text-lg mt-2">Fresh and delicious lemonade for every taste.</p>
      </header>

      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
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

      <footer className="mt-16 text-center">
        <Link href="/cart" className="text-blue-500 hover:underline">
          Go to Cart
        </Link>
        <span className="mx-4">|</span>
        <Link href="/checkout" className="text-blue-500 hover:underline">
          Proceed to Checkout
        </Link>
      </footer>
    </div>
  );
}