import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, About } from "pages";

class App extends Component {
  render() {
    return (
      <div>
        <header>이건 헤더야</header>
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
