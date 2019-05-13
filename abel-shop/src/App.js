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

  // 리팩토링 한다면, 읽는 사람을 위해 wishlist의 initialstate 또는 데이터의 구조를 상수로 만들 것이다.
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
