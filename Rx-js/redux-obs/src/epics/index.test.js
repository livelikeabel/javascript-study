import {Observable} from 'rxjs';
import {ActionsObservable} from 'redux-observable';
import {searchBeersEpic} from './index';
import {searchBeers, SEARCHED_BEERS_LOADING, RECEIVED_BEERS} from '../actions/index';

it('should perform a search', function () {
  const action$ = ActionsObservable.of(searchBeers('shane'))
  
  const deps = {
    ajax: {
      getJSON: () => Observable.off([{name: 'shane'}])
    }
  };
  
  const output$ = searchBeersEpic(action$, null, deps);
  
  output$.toArray().subscrib(actions => {
    expect(actions.length).toBe(2);
    expect(actions[0].type).toBe(SEARCHED_BEERS_LOADING);
    expect(actions[1].type).toBe(RECEIVED_BEERS);
  })
})