import { initStage, sortStage } from '../utils';
const ROW = 5;
const COL = 5;

export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const CHECK_BLOCK = 'CHECK_BLOCK';

export const setGameStatus = gameStatus => ({ type: SET_GAME_STATUS, gameStatus })
export const checkBlock = number => ({ type: CHECK_BLOCK, number})

const INITIAL_STATE = {
    gameStatus: false,
    block: { size: 80, row: ROW, col: COL },
    player1: {
        stage: initStage(ROW, COL, { number: null, checked: false })
    },
    player2: {
        stage: initStage(ROW, COL, { number: null, checked: false })
    },
}

const bingo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_GAME_STATUS:
            if (action.gameStatus) {
                const player1Stage = sortStage(ROW, COL, state.player1.stage)
                const player2Stage = sortStage(ROW, COL, state.player2.stage)
                return {
                    ...state,
                    gameStatus: action.gameStatus,
                    player1: { stage: player1Stage },
                    player2: { stage: player2Stage }
                }
            }
            if (!action.gameStatus) {
                return {
                    gameStatus: action.gameStatus,
                    player1: { stage: initStage(ROW, COL, { number: null, checked: false }) },
                    player2: { stage: initStage(ROW, COL, { number: null, checked: false }) }
                }
            }
        case CHECK_BLOCK:
            console.log(action.number)
            return {
                ...state
            }
        default:
            return state
    }
}

export default bingo;