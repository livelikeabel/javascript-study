import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tr = styled.tr`
  height: 50px;
  line-height: 50px;
  text-align: left;
`;
const Td = styled.th`
  padding: 0 10px;
  font-size: 15px;
  font-weight: ${props => props.bold ? props.bold : '400'};
  color: #343a40;
`

function TableRow({ alpha2Code, callingCodes, capital, name, region }) {
  return (
    <Tr>
      <Td>{callingCodes[0]}</Td>
      <Td bold={800}>{name}</Td>
      <Td>{alpha2Code}</Td>
      <Td>{capital}</Td>
      <Td>{region}</Td>
    </Tr>
  )
}

TableRow.propTypes = {

}

export default TableRow

