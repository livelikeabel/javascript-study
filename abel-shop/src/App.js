import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
import Products from './pages/products';
import Wishlist from './pages/wishlist';

import './App.scss';

export const ShopContext = createContext();

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const globalState = { wishlist, setWishlist }

  return (
    <>
      <ShopContext.Provider value={globalState}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Main} />
            <Route path="/products" component={Products} />
            <Route path="/wishlist" component={Wishlist} />
          </div>
        </Router>
      </ShopContext.Provider>
    </>
  );
};

export default App;
