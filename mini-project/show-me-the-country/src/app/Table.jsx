import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import TableRow from './TableRow.jsx';
import Loading from './Loading.jsx';
import { 
  sortCountries, deleteCountry,
  CALLING_CODES, NAME, ALPHA2CODE, CAPITAL, REGION
} from '../ducks/country';


const TableUI = styled.table`
  width 1000px;
  margin: 0 auto;
`;
const Tr = styled.tr`
  height: 80px;
  line-height: 80px;
  text-align: left;
`;
const Th = styled.th`
  padding: 0 10px;
  font-size: 14px;
  color: #868e96;
`;
const Arrow = styled.i`
  border: solid #51cf66;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin: 4px 4px ${props => props.direction === 'up' ? '0px' : '4px'} 4px;
  transform: ${props => props.direction === 'up'
    ? 'rotate(-135deg)' : ' rotate(45deg)'};
  cursor: pointer;
`;

class Table extends Component {
  state = { showingRow: 20, loading: false }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleDeleteCountry = name => {
    this.props.deleteCountry(name);
  }

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop = document.body.scrollTop ||
      // ie
      (document.documentElement && document.documentElement.scrollTop);

    if (scrollHeight - innerHeight - scrollTop < 100) {
      this.showMore();
    }
  }

  showMore = () => {
    const {loading, showingRow} = this.state;
    const {countries} = this.props;
    if(loading || showingRow >= countries.length) return null;
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ showingRow: this.state.showingRow + 20, loading: false })
    }, 500);
  }

  render() {
    const { countries, sortCountries, direction } = this.props;
    const { showingRow, loading } = this.state;
    return (
      <>
        <TableUI>
          <thead>
            <Tr>
              <Th>
                CALLING CODES
            <Arrow
                  onClick={sortCountries.bind(this, CALLING_CODES, direction[CALLING_CODES])}
                  direction={direction[CALLING_CODES]}
                />
              </Th>
              <Th>
                NAME
            <Arrow
                  onClick={sortCountries.bind(this, NAME, direction[NAME])}
                  direction={direction[NAME]} />
              </Th>
              <Th>
                ALPHA 2 CODE
              <Arrow
                  onClick={sortCountries.bind(this, ALPHA2CODE, direction[ALPHA2CODE])}
                  direction={direction[ALPHA2CODE]} />
              </Th>
              <Th>
                CAPITAL
              <Arrow
                  onClick={sortCountries.bind(this, CAPITAL, direction[CAPITAL])}
                  direction={direction[CAPITAL]} />
              </Th>
              <Th>
                REGION
              <Arrow
                  onClick={sortCountries.bind(this, REGION, direction[REGION])}
                  direction={direction[REGION]} />
              </Th>
            </Tr>
          </thead>
          <tbody>
            {countries.slice(0, showingRow).map((country, i) => (
              <TableRow {...country} onDeleteCountry={this.handleDeleteCountry} key={i} />
            ))}
          </tbody>
        </TableUI>
        <Loading isLoading={loading} />
      </>
    )
  }
}

Table.propTypes = {
  countries: PropTypes.array
}

const mapStateToProps = ({ country: { direction } }) => ({ direction });
const mapDispatchToProps = { sortCountries, deleteCountry };

export default connect(mapStateToProps, mapDispatchToProps)(Table);

