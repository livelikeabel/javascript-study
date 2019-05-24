import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  handleChange () {
    this.props.onSearch(this.inputRef.current.value)
  }

  render() {
    return (
      <InputWrapper
        type="text"
        placeholder="Search"
        ref={this.inputRef}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func
};

export default SearchInput;