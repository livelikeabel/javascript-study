import React, { useContext } from 'react';
import { ShopContext } from '../../App';
import './Price.scss';

const Price = () => {
  const { wishlist } = useContext(ShopContext);

  const getTotalPrice = () => wishlist.reduce(
    (totalPrice, { product: { price }, selected, quantity }) => {
      return selected ? totalPrice + (price * quantity) :
        totalPrice;
    }, 0);

  const getDiscountPrice = () => wishlist.reduce((acc, curr) => {
    const { product: { price }, selected, quantity, coupon: { type, discount } } = curr;
    return selected ?
      type === 'rate' ? acc + (price * quantity) / discount :
        type === 'amount' ? acc + discount : acc
      : acc
  }, 0)

  return (
    <div className="Price">
      <p className="Price__title">총 선택 상품</p>
      <div className="Price__container">
        <div className="Price__row">
          <p>총 상품 가격</p>
          <p>{getTotalPrice()}<span>원</span></p>
        </div>
        <div className="Price__row">
          <p>할인</p>
          <p className="Price__row__discount">{getDiscountPrice()} <span>원</span></p>
        </div>
        <div className="Price__last-row">
          <p>총 결제금액</p>
          <p className="Price__last-row__price">{getTotalPrice() - getDiscountPrice()} <span>원</span></p>
        </div>
      </div>
    </div>
  )
}

export default Price;