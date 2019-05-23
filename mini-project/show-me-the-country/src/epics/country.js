import { REQ_COUNTRIES, resCountries } from '../ducks/country';
import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

const countryEpic = action$ => {
  return action$.pipe(
    ofType(REQ_COUNTRIES),
    mapTo(resCountries())
  );
}

export default countryEpic;