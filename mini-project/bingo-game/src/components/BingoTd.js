import React from 'react';
import './BingoTd.scss';

const BingoTd = ({row, block, onClickTd}) => {
    return row.map(({ number, checked }, i) => (
        <td
            onClick={number && onClickTd}
            style={{
                height: block.size,
                width: block.size,
                background: checked ? '#f6f6f6' : ''
            }}
            className='BingoRow-td'
            key={i}>
            {number}
        </td>
    ))
}

export default BingoTd;