import React, {Component} from 'react';
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import NameList from './components/NameList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    names: ['abel', '의성']
  }
  
  onInsert = (name) => {
    this.setState(({names})=>({names: names.concat(name)}));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter/>
          <hr />
          <h1>이름 목록</h1>
          <NameForm onInsert={this.onInsert}/>
          <NameList names={this.state.names} />
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

export default App;
