import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';
import Header from './Header.jsx';
import useFetch from './useFetch.js';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch('http://localhost:8000/todo', setTodos);

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, { id: todos.length, title: newTodo, status: 'todo' }]);
  }

  const changeTodoStatus = id => {
    const updateTodos = todos.map(todo => {
      if (todo.id === +id) {
        if (todo.status === 'done') todo.status = "todo";
        else todo.status = "done"
      }
      return todo
    })

    setTodos(updateTodos);
  }

  useEffect(() => {
    console.log('new !')
    console.log(todos)
  }, [todos])

  return (
    <>
      <Header todos={todos} />
      <form>
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} loading={loading} changeTodoStatus={changeTodoStatus} />
    </>
  )
}

export default App;
