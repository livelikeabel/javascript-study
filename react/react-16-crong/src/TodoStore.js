import React, { useEffect, useReducer } from 'react';
import useFetch from './useFetch.js';
import { todoReducer } from './reducer.js';

export const TodoContext = React.createContext();

const TodoStore = props => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData) => {
    dispatch({ type: 'SET_INIT_DATA', payload: initData })
  }

  const loading = useFetch('http://localhost:8000/todo', setInitData);

  useEffect(() => {
    console.log('new !')
    console.log(todos)
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, loading, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoStore;
