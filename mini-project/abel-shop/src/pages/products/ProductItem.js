import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { ShopContext } from '../../App.js';
import './ProductItem.scss';

const ProductItem = product => {
  const { id, title, coverImage, price } = product;
  const { wishlist, setWishlist } = useContext(ShopContext);

  const toggleItem = id => {
    // 이것도... 흠... view가 알고있어야 하는 관심사 인가....?
    const callback = ({ product }) => product.id !== id;
    wishlist.every(callback) ?
      wishlist.length < 3 ?
        setWishlist([...wishlist, { product, selected: true, quantity: 1, coupon: { type: '', discount: 0 } }]) :
        alert('장바구니는 3개까지만 담을 수 있어요 :)') :
      setWishlist(wishlist.filter(callback))
  };

  const isHave = wishlist.some(({ product }) => product.id === id);
  return (
    <div className="ProductItem">
      <img src={coverImage} alt={title} />
      <h3 className="ProductItem__title">{title}</h3>
      <p className="ProductItem__price">{price}원</p>
      <div className="ProductItem__button-wrapper">
        <Button
          onClick={toggleItem.bind(this, id)}
          style={isHave ? { background: 'tomato' } : null}
        >
          {isHave ? '빼기' : '담기'}
        </Button>
      </div>
    </div >
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    coverImage: PropTypes.string,
    price: PropTypes.number
  }),
};

export default ProductItem;