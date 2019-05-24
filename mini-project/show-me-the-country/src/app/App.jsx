import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reqCountries } from '../ducks/country';
import Country from './Country.jsx';
import NewItemModal from './NewItemModal.jsx';
import './reset.css';

class App extends Component {
  componentDidMount() {
    this.props.reqCountries();
  }

  render() {
    const { countries } = this.props;
    return (
      <>
        <Country countries={countries} />
        <NewItemModal />
      </>
    )
  }
}

const mapStateToProps = ({ country: { countries } }) => ({
  countries
});
const mapDispatchToProps = { reqCountries };

export default connect(mapStateToProps, mapDispatchToProps)(App);