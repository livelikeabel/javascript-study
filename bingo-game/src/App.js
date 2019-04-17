import React, { Component } from 'react';
import { connect } from 'react-redux';
import BingoTable from './components/BingoTable';
import { setGameStatus } from './reducers/bingo';
import './App.scss';

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>BIIIIINGO GAME!!!!</h1>
        <button
          onClick={() => this.props.setGameStatus(!this.props.gameStatus)}
        >
          {this.props.gameStatus ? 'RESTART' : 'START'}
        </button>
        <div className="App-bingoWrapper">
          <BingoTable player={'player1'} />
          <BingoTable player={'player2'} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ bingo: { gameStatus } }) => ({ gameStatus });
const mapDispatchToProps = { setGameStatus }

export default connect(mapStateToProps, mapDispatchToProps)(App);
