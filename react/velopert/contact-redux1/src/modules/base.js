import { createAction, handleActions} from 'redux-actions';
import { Map } from 'immutable';

const CHANGE_SEARCH = 'base/CHANGE_SEARCH';
const SET_VIEW = 'base/SET_VIEW';

// 액션 생성자 함수
export const changeSearch = createAction(CHANGE_SEARCH); //keyword
export const setView = createAction(SET_VIEW); // view

// map으로 초기 state 만들어 주는건가...? reducer에서 해야하는거 아닌가?
const initialState = Map({
    keyword: '',
    view: 'favorite' // favorite, list
});

// 뭐하는 친구지...?
export default handleActions({
    [CHANGE_SEARCH]: (state, action) => state.set('keyword', action.payload),
    [SET_VIEW]: (state, action) => state.set('view', action.payload)
}, initialState)


