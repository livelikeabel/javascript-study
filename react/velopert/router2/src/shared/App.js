import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "pages";
import { Menu } from "components";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about/:name" component={About} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
//Root가 최상위 이고, 그 밑이 app 컴포넌트
