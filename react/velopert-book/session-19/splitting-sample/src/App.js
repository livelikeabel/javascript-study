import React, { useState, Suspense } from 'react';
import './App.css';

const SplitMe = React.lazy(() => import('./SplitMe'));

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onClick}>Hello React</p>
        <Suspense fallback={<div>Loading...</div>}>
          {visible && <SplitMe/>}
        </Suspense>
      </header>
    </div>
  );
};

export default App;
