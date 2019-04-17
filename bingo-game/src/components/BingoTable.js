import React from 'react';
import { connect } from 'react-redux';

const BingoTable = ({ player1: { stage } }) => {
    const rows = stage.map((row, i) => <BingoRow row={row} key={i} />)
    return (
        <table>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

const BingoRow = ({ row }) => (
    <tr>
        {row.map(({ number, checked }, i) => (
            <td key={i}>{number}</td>
        ))}
    </tr>
)

const mapStateToProps = ({ bingo: { player1 } }) => ({ player1 });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BingoTable);