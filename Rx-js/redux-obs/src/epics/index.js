import {Observable} from 'rxjs';
import {combineEpics} from 'redux-observable';
import {LOAD_STORIES, clear} from '../actions';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

function loadStoriesEpic(action$) {
  return action$
    .ofType(LOAD_STORIES)
    .switchMap(() => {
      return Observable.of(clear()).delay(2000);
    })
}

export const rootEpic = combineEpics(loadStoriesEpic);