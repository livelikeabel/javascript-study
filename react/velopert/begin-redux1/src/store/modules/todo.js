import { createAction } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE), id => id);

let id = 0; // todo 아이템에 들어갈 고유 값 입니다.

const initialState = Map({
    input: '',
    todos: List() //뭐징???
});

//리듀서 순수함수
export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [INSERT]: (state, { payload: text }) => {
        //위 코드는 action 객체를 비구조화 할당하고, payload값을 text 라고 부르겠다는 의미이다.
        const item = Map({ id: id++, checked: false, text }); // 하나 추가 할 때마다 id 값을 증가 시킵니다.
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id}) => {
        //id 값을 가진 index를 찾아서 checked 값을 반전시킵니다.
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked, !checked);
    },
    [REMOVE]: (state, { payload: id}) => {
        // id 값을 가진 index를 찾아서 지웁니다.
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);


// let nextState = null;
// // input 값을 바꾼 새 객체를 만들기
// nextState = state.set('input', '새로운 값');
// // todos 에 항목 추가하기
// nextState = state.update('todos', todos => todos.push(Map({ id:2, text: '새로운거', checked: false })));
// // 0번째 항목 checked 값 반전하기
// nextState = state.updateIn(['todos', 0, 'checked'], checked => !checked);
