import { initStage } from '../utils';

export const TEST = 'TEST';

export const test = () => ({type: TEST, status: true})

const INITIAL_STATE = {
    testStatus: false,
    player1: {
        stage: initStage(5, 5, {number: null, checked: false})
    },
    player2: {
        stage: initStage(5, 5, {number: null, checked: false})
    }
}

const bingo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case TEST:
        return {testStatus: action.status}
    default:
        return state
    }
}

export default bingo;