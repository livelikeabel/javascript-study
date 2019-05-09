import React from 'react';
import './Item.css';

const Item = ({todo:{id, title, status}, changeTodoStatus}) => {
  const toggleItem = e => {
    const id = e.target.dataset.id;
    changeTodoStatus(id);
  }
  const itemClassName = status === 'done' ? 'done' : '';
  return (
    <li data-id={id} onClick={toggleItem} className={itemClassName}>{title}</li>
  )
}

export default Item
