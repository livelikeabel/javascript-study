import React,{ Component } from 'react';
import { req } from './api';
import Header from './components/Header';
import List from './components/List';
import './App.css';

class App extends Component {

  state = { animalData: [],animalType: 'cat' };

  componentDidMount() {
    this._getAnimal();
  }

  componentDidUpdate(_,{ animalType: prevAnimalType }) {
    if (prevAnimalType != this.state.animalType) {
      this._getAnimal(this.state.animalType);
    }
  }

  _getAnimal = (type = 'cat') => {
    req(`http://localhost:8080/${type}`).then(res => {
      this.setState({ animalData: res })
    });
  }

  handleChangeAnimalType = animalType => {
    this.setState({ animalType })
  }

  render() {
    const { animalData } = this.state;
    return (
      <div className="App">
        <Header name="냥이와 댕댕" onClickAnimalType={this.handleChangeAnimalType} />
        {animalData.length && <List animalData={animalData} />}
      </div>
    );
  }
}

// const List = ({ animalData }) => (
//   animalData.map((data) => (
//     <Card {...data} key={data._id} />
//   ))
// )

export default App;
