import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="Header">
    <Link to="/"><h1>Abel Shop</h1></Link>
    <ul>
      <Link to="/products"><li>Products</li></Link>
      <Link to="/wishlist"><li>wishlist</li></Link>
    </ul>
  </div>
);

export default Header;