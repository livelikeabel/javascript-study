import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Main = () => {
  return (
    <div className="Main">
      <h1>안녕하세요, Abel Shop입니다</h1>
      <Link to="/products">클래스 보러가기</Link>
      <Link to="/wishlist">장바구니 보러가기</Link>
    </div>
  )
}

export default Main;