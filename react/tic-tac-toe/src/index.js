import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquere(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquere(0)}
          {this.renderSquere(1)}
          {this.renderSquere(2)}
        </div>
        <div className="board-row">
          {this.renderSquere(3)}
          {this.renderSquere(4)}
          {this.renderSquere(5)}
        </div>
        <div className="board-row">
          {this.renderSquere(6)}
          {this.renderSquere(7)}
          {this.renderSquere(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div />
          <ol />
        </div>
      </div>
    );
  }
}

// =============

ReactDOM.render(<Game />, document.getElementById("root"));
