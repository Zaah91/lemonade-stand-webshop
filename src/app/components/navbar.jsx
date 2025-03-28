// filepath: src/components/Navbar.jsx
import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f4f4f4' }}>
      <Link href="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link href="/cart" style={{ marginRight: '15px' }}>Cart</Link>
      <Link href="/checkout">Checkout</Link>
    </nav>
  );
}

export default Navbar;

// TODO: Comments and explanations