import React, { Component } from 'react';
import { req } from './api';
import Header from './components/Header';
import List from './components/List';
import Loading from './components/Loading';

class App extends Component {

  state = { animalData: [], animalType: 'cat', isLoading: false };

  componentDidMount() {
    this._getAnimal();
  }

  componentDidUpdate(_, { animalType: prevAnimalType }) {
    if (prevAnimalType !== this.state.animalType) {
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

  handleToggleLoading = bool => (this.setState({ isLoading: bool }))

  render() {
    const { animalData, animalType, isLoading } = this.state;
    return (
      <>
        <Header
          name="냥이와 댕댕"
          animalType={animalType}
          onClickAnimalType={this.handleChangeAnimalType}
        />
        <List
          animalData={animalData}
          animalType={animalType}
          onChangeToggleLoading={this.handleToggleLoading}
          isLoading={isLoading}
        />
        <Loading isLoading={isLoading} />
      </>
    );
  }
}

export default App;
