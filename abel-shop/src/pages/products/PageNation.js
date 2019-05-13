import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PageNation.scss';

const PageNation = ({ handleChangePage, trimNumber, items }) => {
  const [curPage, setCurPage] = useState([1])
  const pageNum = Math.ceil(items.length / trimNumber);

  useEffect(() => {
    handleChangePage(items.slice(0, trimNumber))
  }, []);

  const onChangePage = i => {
    handleChangePage(items.slice(i * trimNumber, i * trimNumber + trimNumber))
    setCurPage(i + 1);
  }

  const renderPageLi = () => {
    return new Array(pageNum)
      .fill(null)
      .map((_, i) => {
        return (
          <li
            style={{ color: `${curPage == i + 1 ? 'red' : ''}` }}
            onClick={onChangePage.bind(this, i)
            }>
            {i + 1}
          </li>)
      })
  }


  return (
    <>
      <div onClick={() => handleChangePage()}>hi</div>
      <ul>
        {renderPageLi()}
      </ul>
    </>
  )
}

PageNation.defaultProps = {
  items: [],
  trimNumber: 5
}

PageNation.propTypes = {
  items: PropTypes.array,
  trimNumber: PropTypes.number,
  onChagePage: PropTypes.func.isRequired
}

export default PageNation;