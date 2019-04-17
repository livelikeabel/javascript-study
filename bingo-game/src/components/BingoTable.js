import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkBlock, setBingoCount } from '../reducers/bingo';
import './BingoTable.scss';

class BingoTable extends Component {
    constructor(props) {
        super(props);
        this.table = React.createRef();
    }

    componentDidUpdate(prevProps) {
        const { setBingoCount, player } = this.props;
        const bingoCount = this._countBingo();
        if (prevProps.bingo[player].bingoCount !== bingoCount) {
            setBingoCount(player, bingoCount);
        }
    }

    _countBingo = () => {
        const { bingo, player } = this.props;
        const { stage } = bingo[player];
        let bingoCount = 0;
        // 행검사
        stage.forEach(row => {
            const checkeds = row.filter(block => block.checked === true);
            if (checkeds.length === 5) bingoCount++
        })
        // 열검사
        stage.forEach((row, i) => {
            let colCount = 0;
            row.forEach((_, j) => {
                if (stage[j][i].checked) colCount++;
            })
            if (colCount === 5) bingoCount++;
        })
        // 왼쪽 대각선 검사
        const leftDiagonal = stage.filter((_, i) => stage[i][i].checked === true)
        if (leftDiagonal.length === 5) bingoCount++;

        // 오른쪽 대각선 검사
        const rightDiagonal = stage.filter((row,i) => {
            return stage[row.length - (i+1)][i].checked === true
        })
        if (rightDiagonal.length === 5) bingoCount++;

        return bingoCount
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
const mapDispatchToProps = { checkBlock, setBingoCount };

export default connect(mapStateToProps, mapDispatchToProps)(BingoTable);