import React, { Component } from 'react';
import { connect } from 'react-redux';
import BingoTable from './components/BingoTable';
import { test } from './reducers/bingo';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BingoTable player={'player1'}/>
        <BingoTable player={'player2'}/>
      </div>
    );
  }
}

const mapStateToProps = ({ bingo: { player1 } }) => ({ player1 });
const mapDispatchToProps = { test }

export default connect(mapStateToProps, mapDispatchToProps)(App);
