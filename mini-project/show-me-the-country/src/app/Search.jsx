import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
const InputWrapper = styled.input`
  flex-grow: 1;
  box-sizing: border-box;
  height: 100%;
  width: 150px;
  padding: 0 0 0 15px;
  background: none;
  border: none;
  border-left: 1.2px solid #495057;
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

export default class Search extends Component {


  render() {
    return (
      <SearchWrapper>
        <SelectWrapper name="" id="">
          <option value="filter">Filter</option>
        </SelectWrapper>
        <InputWrapper type="text" placeholder="Search"/>
        <ButtonWrapper>New Item</ButtonWrapper>
      </SearchWrapper>
    )
  }
}
