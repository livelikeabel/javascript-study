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
  font-size: 14px;
  font-weight: ${props => props.bold ? props.bold : '400'};
  color: #343a40;
`
const DeleteBtn = styled.button`
  background: #ffe3e3;
  color: #e03131;
  border-radius: 5px;
`

function TableRow({ alpha2Code, callingCodes, capital, name, region, onDeleteCountry }) {
  return (
    <Tr>
      <Td>{callingCodes[0]}</Td>
      <Td bold={800}>{name}</Td>
      <Td>{alpha2Code}</Td>
      <Td>{capital}</Td>
      <Td>{region}</Td>
      <Td>
        <DeleteBtn onClick={onDeleteCountry.bind(this, name)}>delete</DeleteBtn>
      </Td>
    </Tr>
  )
}

TableRow.propTypes = {

}

export default TableRow

