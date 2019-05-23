export const REQ_COUNTRIES = 'REQ_COUNTRIES';
export const RES_COUNTRIES = 'RES_COUNTRIES';
export const SORT_COUNTRIES = 'SORT_COUNTRIES';

export const reqCountries = () => ({ type: REQ_COUNTRIES });
export const resCountries = countries => ({ type: RES_COUNTRIES, countries });
export const sortCountries = (field, direction) => ({ type: SORT_COUNTRIES, field, direction });

export const CALLING_CODES = 'CALLING_CODES';

const INITIAL_STATE = {
  countries: [],
  direction: {
    CALLING_CODES: 'down',
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RES_COUNTRIES: {
      const { countries } = action
      return { ...state, countries };
    }
    case SORT_COUNTRIES: {
      const { field, direction } = action;
      const { countries } = state;
      console.log(field, direction)
      return {
        ...state,
        countries: [
          ...countries.sort(
            (a, b) => direction === 'up'
              ? a.callingCodes[0] - b.callingCodes[0]
              : b.callingCodes[0] - a.callingCodes[0]
          )
        ],
        direction: {CALLING_CODES: direction === 'up' ? 'down' : 'up'}
      };
    }
    default:
      return state;
  }
};