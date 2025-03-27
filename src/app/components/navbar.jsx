// filepath: src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f4f4f4' }}>
      <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link to="/cart" style={{ marginRight: '15px' }}>Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </nav>
  );
}

export default Navbar;

// TODO: Comments and explanations