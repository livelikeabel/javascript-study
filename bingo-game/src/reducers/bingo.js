export const TEST = 'TEST';

export const test = () => ({type: TEST, status: true})

const INITIAL_STATE = {testStatus: false}

const bingo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case TEST:
        return {testStatus: action.status}
    default:
        return state
    }
}

export default bingo;