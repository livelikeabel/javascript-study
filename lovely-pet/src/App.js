import React,{ Component } from 'react';
import { req } from './api';
import Card from './components/Card';
import './App.css';

class App extends Component {

  state = { cat: [], dog: [] };

  componentDidMount() {
    req('http://localhost:8080/dog').then(res => {
      console.log(res)
      this.setState({ dog: res })
    });
  }

  _renderCat() {
    if(this.state.dog.length === 0 ) return;
    return this.state.dog.map((data) => {
      return <Card {...data} key={data._id} />
    })
  }

  render() {
    return (
      <div className="App">
        냥이와 댕댕
        {/* {this.state.cat.length && this._renderCat()} */}
        {this.state.dog.length && this._renderCat()}
      </div>
    );
  }
}

export default App;
