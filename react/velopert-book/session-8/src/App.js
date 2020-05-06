import React, { useState } from 'react';
import Counter from "./Counter";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
      <hr/>
      {visible && <Counter/>}
    </>
  );
}

export default App;
