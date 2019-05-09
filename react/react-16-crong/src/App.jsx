import React from 'react'
import List from './List.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';
import './App.css';
import TodoStore from './TodoStore.js';

const App = () => {
  return (
    <TodoStore>
      <Header />
      <Form />
      <List />     
    </TodoStore>
  )
}

export default App
