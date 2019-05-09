import React, { useContext } from 'react'
import { TodoContext } from './TodoStore.js';
import './Item.css';

const Item = ({ todo: { id, title, status } }) => {

  const { dispatch } = useContext(TodoContext);

  const toggleItem = e => {
    const id = e.target.dataset.id;
    dispatch({ type: "CHANGE_TODO_STATUS", payload: id });
  }
  const itemClassName = status === 'done' ? 'done' : '';
  return (
    <li data-id={id} onClick={toggleItem} className={itemClassName}>{title}</li>
  )
}

export default Item
