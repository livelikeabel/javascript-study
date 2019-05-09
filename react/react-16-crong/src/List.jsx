import React from 'react'
import Loading from './Loading';

const List = ({ todos, loading }) => {
  let todoList = <Loading />;
  if (!loading) todoList = todos.map(({ title, id }) => <li key={id}>{title}</li>);
  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default List
