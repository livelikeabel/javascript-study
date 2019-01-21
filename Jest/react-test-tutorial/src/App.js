import React, {Component} from 'react';
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import NameList from './components/NameList'

class App extends Component {
  state = {
    names: ['abel', '의성']
  }
  
  onInsert = (name) => {
    this.setState(({names})=>({names: names.concat(name)}));
  }
  
  render() {
    return (
      <div>
          <Counter/>
          <hr />
          <h1>이름 목록</h1>
          <NameForm onInsert={this.onInsert}/>
          <NameList names={this.state.names} />
      </div>
    );
  }
}

export default App;
