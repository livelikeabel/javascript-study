import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import {test} from './reducers/bingo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img onClick={() => {
            this.props.test()
            }} src={logo} className="App-logo" alt="logo" />
          <p onClick={() => {
            this.props.test()
            }}>
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
        </header>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {test}

export default connect(mapStateToProps, mapDispatchToProps)(App);
