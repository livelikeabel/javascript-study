import React, { useState, Suspense } from 'react';
import './App.css';
import loadable from '@loadable/component';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React</p>
        <Suspense fallback={<div>Loading...</div>}>
          {visible && <SplitMe/>}
        </Suspense>
      </header>
    </div>
  );
};

export default App;
