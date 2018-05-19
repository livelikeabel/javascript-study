import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
        <ol>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/about/abel">about abel</Link></li>
            <li><Link to="/posts">posts</Link></li>
        </ol>
    </div>
    );
};

export default Menu;
