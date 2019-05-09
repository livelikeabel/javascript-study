import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';
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

  useEffect(() => {
    console.log('new !')
    console.log(todos)
  }, [todos])

  return (
    <>
      <h1>todo 애플리케이션</h1>
      <form>
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} loading={loading} />
    </>
  )
}

export default App;
