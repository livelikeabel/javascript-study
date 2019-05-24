import React from 'react';
import Table from './Table.jsx';
import Search from './Search.jsx';
import styled from 'styled-components';

const CountryUI = styled.div`
  background: #f1f3f5;
`
const ContentWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`
const Header = styled.header`
  height: 60px;
  background: #51cf66;
  font-size: 30px;
  color: #f6f6f6;
  text-align: center;
  line-height: 60px;
`

function Country({ countries }) {
  return (
    <CountryUI>
      <Header>Show me the country</Header>
      <ContentWrapper>
        <Search />
        <Table countries={countries} />
      </ContentWrapper>
    </CountryUI>
  )
}

export default Country;