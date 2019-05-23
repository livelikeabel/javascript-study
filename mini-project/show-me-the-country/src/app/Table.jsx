import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import TableRow from './TableRow.jsx';


const TableUI = styled.table`
  width 900px;
  margin: 0 auto;
  // background: blue;
`;
const Tr = styled.tr`
  height: 80px;
  line-height: 80px;
  text-align: left;
  color: #868e96;
`;
const Th = styled.th`
  padding: 0 10px;
`

const Table = ({ countries }) => {
  return (
    <TableUI>
      <thead>
        <Tr>
          <Th>CALLING CODES</Th>
          <Th>NAME</Th>
          <Th>ALPHA 2 CODE</Th>
          <Th>CAPITAL</Th>
          <Th>REGION</Th>
        </Tr>
      </thead>
      <tbody>
        {countries.map((country, i) => <TableRow {...country} key={i} />)}
      </tbody>
    </TableUI>
  )
}

Table.propTypes = {

}

export default Table

