import React, { useContext, useRef } from 'react';
import { TodoContext } from './TodoStore.js';

const Form = () => {
  const inputRef = useRef(false);
  const { dispatch } = useContext(TodoContext);

  const addTodoData = e => {
    e.preventDefault();
    dispatch({type:'ADD_TODO', payload: inputRef.current.value})
  }
  return (
    <>
      <form>
        <input type="text" name="" ref={inputRef} />
        <button onClick={addTodoData}>할일추가</button>
      </form>
    </>
  )
}

export default Form
