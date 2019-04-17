import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BingoTable.scss'

class BingoTable extends Component {

    _renderRows = () => {
        const { player, bingo } = this.props;
        return bingo[player].stage.map((row, i) => (
            <BingoRow row={row} key={i} />
        ))
    }

    render() {
        return (
            <table className='BingoTable'>
                <tbody>
                    {this._renderRows()}
                </tbody>
            </table>
        )
    }
}

const BingoRow = ({ row }) => (
    <tr className='BingoRow'>
        {row.map(({ number, checked }, i) => (
            <td
                onClick={number && clickTd}
                className='BingoRow-td'
                key={i}>
                {number}
            </td>
        ))}
    </tr>
)

const clickTd = (target) => {
    console.log(target)
    console.log('hi')
}

const mapStateToProps = ({ bingo, bingo: { gameStatus } }) => ({ bingo, gameStatus });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BingoTable);