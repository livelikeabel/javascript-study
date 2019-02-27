import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/observable/dom/ajax";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import {SEARCHED_BEERS, receiveBeers} from '../actions';

const beers = `https://api.punkapi.com/v2/beers`;
const search = term => `${beers}?beer_name=${encodeURIComponent(term)}`;
const ajax = term => Observable.ajax.getJSON(search(term));

function searchBeersEpic(action$) {
  return action$.ofType(SEARCHED_BEERS)
    .debounceTime(500)
    .switchMap(({payload}) => {
      console.log(payload)
      return ajax(payload)
        .map(receiveBeers)
    })
}

export const rootEpic = combineEpics(searchBeersEpic);