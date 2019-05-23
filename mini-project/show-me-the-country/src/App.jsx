import React from 'react';
import { connect } from 'react-redux';
import { reqCountries } from './ducks/country';

function App({reqCountries}) {
  return (
    <div>
      appasfsasdfasdfasdfasfasdfasdfasfdasdfasdf
      <button onClick={reqCountries}>hi</button>
    </div>
  )
}

const mapStateToProps = (state, props) => ({});
const mapDispatchToProps = {reqCountries};

export default connect(mapStateToProps, mapDispatchToProps)(App);