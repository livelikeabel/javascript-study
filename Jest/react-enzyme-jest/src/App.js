import React from 'react';
import logo from './logo.svg';
import './App.css';

const Test = ({ text }) => <div>{text}</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Welcome to React</h1>
      </header>
      <Test text="Some title" />
      <ul className="hi">
        <li>hi</li>
        <li>d</li>
        <li>2d</li>
      </ul>
    </div>
  );
}

export class Link extends React.Component {
  render() {
    return this.props.hide ? null : (<a href={this.props.address}>Click</a>)
  }
}

export default App;
