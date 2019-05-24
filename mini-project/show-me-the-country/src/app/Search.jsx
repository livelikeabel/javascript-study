import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchInput from './SearchInput.jsx';
import { connect } from 'react-redux';
import { searchCountries, showModal } from '../ducks/country';

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
  state = {
    filter: 'name'
  }

  handleSearch = value => {
    this.props.searchCountries(value, this.state.filter);
  }

  handleSelectChange = e => {
    this.setState({ filter: e.target.value });
  }

  render() {
    const {showModal} = this.props;
    return (
      <SearchWrapper>
        <SelectWrapper onChange={this.handleSelectChange}>
          <option value="name">Filter</option>
          <option value="callingCodes">CALLING CODES</option>
          <option value="name">NAME</option>
          <option value="alpha2Code">ALPHA 2 CODE</option>
          <option value="capital">CAPITAL</option>
          <option value="region">REGION</option>
        </SelectWrapper>
        <SearchInput onSearch={this.handleSearch} />
        <ButtonWrapper onClick={showModal.bind(this, true)}>New Item</ButtonWrapper>
      </SearchWrapper>
    )
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { searchCountries, showModal };

export default connect(mapStateToProps, mapDispatchToProps)(Search)