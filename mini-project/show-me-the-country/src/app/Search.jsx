import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from './SearchInput.jsx';
import { connect } from 'react-redux';
import { searchCountries } from '../ducks/country';

const SearchWrapper = styled.div`
  display: flex;
  height: 40px;
  margin: 40px 0 20px;
`
const SelectWrapper = styled.select`
  height: 100%;
  width: 100px;
  margin: 0 15px 0 0;
  background: none;
  border: none;
  font-size: 25px;
  color: #495057;
`

const ButtonWrapper = styled.button`
  right: 0px;
  height: 100%;
  width: 150px;
  border: none;
  border-radius: 10px;
  background: #51cf66;
  font-size: 18px;
  color: #f8f9fa;
`

class Search extends Component {

  handleSearch (value) {
    const filter='callingCodes'
    this.props.searchCountries(value, filter);
  }

  render() {
    return (
      <SearchWrapper>
        <SelectWrapper name="" id="">
          <option value="filter">Filter</option>
        </SelectWrapper>
        <SearchInput onSearch={this.handleSearch.bind(this)} />
        <ButtonWrapper>New Item</ButtonWrapper>
      </SearchWrapper>
    )
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {searchCountries};

export default connect(mapStateToProps, mapDispatchToProps)(Search)