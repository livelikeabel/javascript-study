import { combineEpics } from 'redux-observable';
import country from './country';

export default combineEpics(country);
