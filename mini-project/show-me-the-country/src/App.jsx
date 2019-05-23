import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reqCountries } from './ducks/country';

class App extends Component {
  componentDidMount() {
    this.props.reqCountries();
  }

  render() {
    return (
      <div>
        appasfsasdfasdfasdfasfasdfasdfasfdasdfasdf
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = { reqCountries };

export default connect(mapStateToProps, mapDispatchToProps)(App);