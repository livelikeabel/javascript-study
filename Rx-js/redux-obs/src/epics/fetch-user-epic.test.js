// import {Observable} from 'rxjs';
// it('should return correct actions', function () {
//   const action$ = {
//     ofType() {
//       return Observable.of({
//         type: 'FETCH_USER',
//         payload: 'shakyshane'
//       })
//     }
//   }
// })

const {Observable} = require('rxjs');
const {ActionsObservable} = require('redux-observable');
const {fetchUserEpic} = require('./fetch-user-epic');

it('should return correct actions', function () {
  const action$ = ActionsObservable.of({
    type: 'FETCH_USER',
    payload: 'shankshane'
  })
  
  const output$ = fetchUserEpic(action$);
  output$.subscribe(action => {
    console.log(action);
  })
})