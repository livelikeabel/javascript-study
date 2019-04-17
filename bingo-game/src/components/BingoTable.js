import React from 'react';
import { connect } from 'react-redux';
import './BingoTable.scss'

const BingoTable = ({player, bingo}) => {
    const rows = bingo[player].stage.map((row, i) => <BingoRow row={row} key={i} />)
    return (
        <table className='BingoTable'>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

const BingoRow = ({ row }) => (
    <tr className='BingoRow'>
        {row.map(({ number, checked }, i) => (
            <td className='BingoRow-td' key={i}>{number}</td>
        ))}
    </tr>
)

const mapStateToProps = ({ bingo }) => ({ bingo });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BingoTable);