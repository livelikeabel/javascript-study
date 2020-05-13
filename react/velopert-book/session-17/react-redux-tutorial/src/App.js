import React from 'react';
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

const App = () => {
  return (
    <div>
      <CounterContainer number={0}/>
      <hr/>
      <TodosContainer/>
    </div>
  );
};

export default App;
