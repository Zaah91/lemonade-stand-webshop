import React from 'react';
import Link from 'next/link';

const product = [
    {id: 1, name: 'Lemonade', price: 5, description: 'Frsth lemonade', image: '/assets/leamonade.jpg'},
]

const ProductList = () => {
    return (
        <div>
            <h1>Product List</h1>
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <Link href={`/cart?product=${product.id}`}>Add to Cart</Link>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ProductList;

// TODO: Comments and explanations