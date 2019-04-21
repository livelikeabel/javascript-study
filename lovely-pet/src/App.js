import React,{ Component } from 'react';
import { req } from './api';
import Card from './components/Card';
import './App.css';

class App extends Component {

  state = { cat: [] }

  componentDidMount() {
    req().then(res => {
      this.setState({ cat: res })
    });
  }

  _renderCat() {
    if(this.state.cat.length === 0 ) return;
    return this.state.cat.map((data) => {
      return <Card {...data} key={data._id} />
    })
  }

  render() {
    return (
      <div className="App">
        냥이와 댕댕
        {this.state.cat.length && this._renderCat()}
      </div>
    );
  }
}

export default App;
