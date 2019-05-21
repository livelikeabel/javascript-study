import { initStage, sortStage, checkNumber } from '../utils';
const ROW = 5;
const COL = 5;

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const CHECK_BLOCK = 'CHECK_BLOCK';
export const SET_BINGO_COUNT = 'SET_BINGO_COUNT';

export const setGameStatus = gameStatus => ({ type: SET_GAME_STATUS, gameStatus })
export const checkBlock = block => ({ type: CHECK_BLOCK, block })
export const setBingoCount = (player, bingoCount) => ({ type: SET_BINGO_COUNT, player, bingoCount })

const INITIAL_STATE = {
    gameStatus: false,
    block: { size: 80, row: ROW, col: COL },
    player1: {
        stage: initStage(ROW, COL, { number: null, checked: false }),
        bingoCount: 0,
        turn: false
    },
    player2: {
        stage: initStage(ROW, COL, { number: null, checked: false }),
        bingoCount: 0,
        turn: false
    },
}

const bingo = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case SET_GAME_STATUS:
            if (action.gameStatus) {
                const { player1, player2 } = state;
                const player1Stage = sortStage(ROW, COL, state.player1.stage)
                const player2Stage = sortStage(ROW, COL, state.player2.stage)
                return {
                    ...state,
                    gameStatus: action.gameStatus,
                    block: { size: 80, row: ROW, col: COL },
                    player1: { ...player1, stage: player1Stage, turn: true },
                    player2: { ...player2, stage: player2Stage }
                }
            }
            if (!action.gameStatus) {
                return {
                    ...INITIAL_STATE,
                    player1: { stage: initStage(ROW, COL, { number: null, checked: false }), bingoCount: 0, turn: false },
                    player2: { stage: initStage(ROW, COL, { number: null, checked: false }), bingoCount: 0, turn: false }
                }
            }
        case CHECK_BLOCK:
            const { block: { number } } = action;
            const { player1, player2 } = state;
            return {
                ...state,
                player1: { ...player1, stage: checkNumber(number, player1.stage), turn: !player1.turn },
                player2: { ...player2, stage: checkNumber(number, player2.stage), turn: !player2.turn }
            }
        case SET_BINGO_COUNT:
            const { player, bingoCount } = action;
            return {
                ...state,
                [player]: { ...state[player], bingoCount }
            }
        default:
            return state
    }
}

export default bingo;