import React from 'react';
import './Coupon.scss';

const Coupon = coupon => {
  const { type, title, discountRate, discountAmount } = coupon;
  return (
    <div className="Coupon">
      <h3>{title}</h3>
      {type},
      discount: {discountRate || discountAmount}
      <select/>
    </div>)
}

export default Coupon;