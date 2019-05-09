import React, { useState, useEffect } from 'react';
import './App.css';
import List from './List.jsx';

const App = () => {
  const [todos, setTodos] = useState(['js 공부']);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  }

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  useEffect(() => {
    console.log('new !')
  }, [todos])

  return (
    <>
      <h1>todo 애플리케이션</h1>
      <form>
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>할일추가</button>
      </form>
      <List todos={todos} />
    </>
  )
}

export default App;
