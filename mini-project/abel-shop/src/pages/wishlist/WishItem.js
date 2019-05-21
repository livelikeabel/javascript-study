import React, { useContext } from 'react';
import { ShopContext } from '../../App';
import Button from '../../components/Button';
import './WishItem.scss';

const WishItem = ({ item, coupons }) => {
  const { wishlist, setWishlist } = useContext(ShopContext);
  const {
    product: { id, title, coverImage, price, availableCoupon },
    selected, quantity
  } = item;

  const setNewWishList = (id, truthyItem) => {
    const newWishList = wishlist.map((item) => {
      return item.product.id === id ? truthyItem : item;
    })
    setWishlist(newWishList);
  }

  // 이것도... 비지니스 로직이기에 view가 알고있어야 하는 정보가 아니다.
  const toggleSelected = (id, item) => {
    const { selected } = item;
    setNewWishList(id, { ...item, selected: !selected });
  }

  const handleChangeCount = (id, item, { target: { value } }) => {
    setNewWishList(id, { ...item, quantity: value })
  }

  const handleChangeCoupon = (id, item,{ target: { value } }) => {
    const [type, discount] = value.split(',');
    setNewWishList(id, { ...item, coupon: { type, discount: +discount } });
  }

  const removeWishlist = id => {
    setWishlist(wishlist.filter(({ product }) => product.id !== id))
  }

  const renderCouopns = () => {
    return (
      <>
        <option value="none, 0">쿠폰을 선택 하세요</option>
        {coupons.map(c => (
          <option
            value={[c.type, c.discountRate || c.discountAmount]}
            key={c.title}
          >
            {c.title}
          </option>
        ))}
      </>
    )
  }

  return (
    <div className="WishItem">
      <input
        className="WishItem__checkbox"
        type="checkbox"
        checked={selected}
        onChange={toggleSelected.bind(this, id, item)}
      />
      <img src={coverImage} alt={title} />
      <div className="WishItem__mid">
        <p className="WishItem__mid__title">{title}</p>
        <p className="WishItem__mid__price">{price}<span>원</span></p>
      </div>
      <input
        className="WishItem__count"
        type="number"
        value={quantity}
        onChange={handleChangeCount.bind(this, id, item)}
      />
      <select
        className="WishItem__select"
        onChange={handleChangeCoupon.bind(this, id, item)}
      >
        {availableCoupon === false ?
          <option>쿠폰을 사용할 수 없는 제품이에요 ㅠㅠ</option> :
          renderCouopns()
        }
      </select>
      <div className="WishItem__button-wrapper">
        <Button
          onClick={removeWishlist.bind(this, id)}
          style={{ background: 'tomato' }}
        >
          빼기
        </Button>
      </div>
    </div>
  )
}

export default WishItem;