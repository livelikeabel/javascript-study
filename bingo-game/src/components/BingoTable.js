import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkBlock } from '../reducers/bingo';
import './BingoTable.scss';

class BingoTable extends Component {
    constructor(props) {
        super(props);
        this.table = React.createRef();
    }

    _getBlock = (pageX, pageY) => {
        const { block: { size, row, col }, bingo, player } = this.props
        const { stage } = bingo[player]
        const { top, left } = this.table.current.getBoundingClientRect()
        if (pageX < left || pageX > (left + size * row) ||
            pageY < top || pageY > (top + size * col)
        ) return null;
        return stage[parseInt((pageY - top) / size)][parseInt((pageX - left) / size)]
    }

    _handleClickTd = ({ pageX, pageY }) => {
        const block = this._getBlock(pageX, pageY);
        if (block) this.props.checkBlock(block);
    }

    _renderTds = row => {
        const { blockSize } = this.props;
        return row.map(({ number, checked }, i) => (
            <td
                onClick={number && this._handleClickTd}
                style={{
                    height: blockSize,
                    background: checked ? '#f6f6f6' : ''
                }}
                className='BingoRow-td'
                key={i}>
                {number}
            </td>
        ))
    }

    _renderRows = () => {
        const { player, bingo } = this.props;
        return bingo[player].stage.map((row, i) => (
            <tr className='BingoRow' key={i}>
                {this._renderTds(row)}
            </tr>
        ))
    }

    render() {
        return (
            <table ref={this.table} className='BingoTable'>
                <tbody>
                    {this._renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({ bingo, bingo: { gameStatus, block } }) => ({
    bingo, gameStatus, block
});
const mapDispatchToProps = { checkBlock };

export default connect(mapStateToProps, mapDispatchToProps)(BingoTable);