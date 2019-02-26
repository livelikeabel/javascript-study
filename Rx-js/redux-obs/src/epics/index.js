import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import "rxjs/add/observable/dom/ajax";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import {FETCH_USER, fetchUserFulfilledAction} from '../actions';

function fetchUserEpic(action$) {
  return action$
    .ofType(FETCH_USER)
    .switchMap(({payload}) => {
      return Observable.ajax.getJSON(`https://api.github.com/users/${payload}`)
        .map(user => {
          return fetchUserFulfilledAction(user)
        })
    })
}

export const rootEpic = combineEpics(fetchUserEpic);