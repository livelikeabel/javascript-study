import { REQ_COUNTRIES, resCountries } from '../ducks/country';
import { ofType } from 'redux-observable';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';


const countryEpic = action$ => action$.pipe(
  ofType(REQ_COUNTRIES),
  mergeMap(action =>
    ajax(`https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes`).pipe(
      map(({ response }) => {
        return resCountries(response);
      }),
      catchError(error => {
        console.log('error', error);
        return of(error);
      })
    )
  )
);

export default countryEpic;