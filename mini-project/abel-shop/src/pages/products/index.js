import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import PageNation from './PageNation';
import { simpleFetch } from '../../utils';
import Loading from '../../components/Loading';

const Products = () => {
  const [productItems, setProductItems] = useState([]);
  const [pageItems, setPageItems] = useState([]);

  useEffect(() => {
    simpleFetch('productItems').then(res => {
      setProductItems(res);
    })
  }, []);

  const handleChangePage = pageItems => {
    setPageItems(pageItems)
  }

  const renderPageItems = () => pageItems.map(product => <ProductItem {...product} />);

  if (productItems.length == 0) return <Loading />;
  return (
    <>
      {renderPageItems()}
      <PageNation
        handleChangePage={handleChangePage}
        trimNumber={4}
        items={productItems}
      />
    </>
  )
}

export default Products