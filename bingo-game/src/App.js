import React, { Component } from 'react';
import { connect } from 'react-redux';
import BingoTable from './components/BingoTable';
import { test } from './reducers/bingo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BingoTable player={'player1'}/>
      </div>
    );
  }
}

const mapStateToProps = ({ bingo: { player1 } }) => ({ player1 });
const mapDispatchToProps = { test }

export default connect(mapStateToProps, mapDispatchToProps)(App);
