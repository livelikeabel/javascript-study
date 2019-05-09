import React from 'react'
import Loading from './Loading';
import Item from './Item.jsx';

const List = ({ todos, loading, changeTodoStatus }) => {
  let todoList = <Loading />;
  if (!loading) todoList = todos.map((todo) => <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus}/>);
  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default List
