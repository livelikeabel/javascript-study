import React from 'react';
import logo from './logo.svg';
import './App.css';

const Test = ({text}) => <div>{text}</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Welcome to React</h1>
      </header>
      <Test text="Some title"/>
      <ul className="hi">
        <li>hi</li>
        <li>d</li>
        <li>2d</li>
      </ul>
    </div>
  );
}

export default App;
