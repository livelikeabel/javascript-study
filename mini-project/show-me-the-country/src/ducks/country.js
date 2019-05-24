import { sortByNumber, sortByString, filterByValue } from '../utils';

export const REQ_COUNTRIES = 'REQ_COUNTRIES';
export const RES_COUNTRIES = 'RES_COUNTRIES';
export const SORT_COUNTRIES = 'SORT_COUNTRIES';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const CREATE_COUNTRY = 'CREATE_COUNTRY';
export const SHOW_MODAL = 'SHOW_MODAL';

export const reqCountries = () => ({ type: REQ_COUNTRIES });
export const resCountries = countries => ({ type: RES_COUNTRIES, countries });
export const sortCountries = (field, direction) => ({ type: SORT_COUNTRIES, field, direction });
export const searchCountries = (value, filter) => (
  { type: SEARCH_COUNTRIES, value, filter }
);
export const deleteCountry = name => ({ type: DELETE_COUNTRY, name });
export const createCounrty = newCountry => ({ type: CREATE_COUNTRY, newCountry });
export const showModal = bool => ({ type: SHOW_MODAL, bool });

export const CALLING_CODES = 'callingCodes';
export const NAME = 'name';
export const ALPHA2CODE = 'alpha2Code';
export const CAPITAL = 'capital';
export const REGION = 'region';

const INITIAL_STATE = {
  allCountries: [],
  countries: [],
  direction: {
    CALLING_CODES: 'down',
    name: 'down',
    alpha2Code: 'down',
    CAPITAL: 'down',
    REGION: 'down'
  },
  modalVisible: false
}

function reduceCountries(state = {
  countries: [],
  direction: INITIAL_STATE.direction
}, action) {
  const { direction, field } = action;
  const { countries } = state;
  switch (action.field) {
    case CALLING_CODES: {
      return {
        countries: [...sortByNumber(countries, field, direction)],
        direction: { [field]: direction === 'up' ? 'down' : 'up' }
      };
    }
    case NAME:
    case ALPHA2CODE:
    case CAPITAL:
    case REGION:
      return {
        countries: [...sortByString(countries, field, direction)],
        direction: { [field]: direction === 'up' ? 'down' : 'up' }
      };
    default:
      return state;
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RES_COUNTRIES: {
      const { countries } = action
      return { ...state, allCountries: countries, countries, action };
    }
    case SORT_COUNTRIES: {
      const { countries, direction } = state;
      return { ...state, ...reduceCountries({ countries, direction }, action) }
    }
    case SEARCH_COUNTRIES: {
      const { value, filter } = action;
      const { allCountries } = state;
      return {
        ...state,
        countries: filterByValue(allCountries, value, filter)
      }
    }
    case DELETE_COUNTRY: {
      const { name } = action;
      const { allCountries, countries } = state;
      const byName = contry => contry.name !== name;
      return {
        ...state,
        allCountries: allCountries.filter(byName),
        countries: countries.filter(byName)
      };
    }
    case CREATE_COUNTRY: {
      const { newCountry } = action;
      const { allCountries, countries } = state;
      return {
        ...state,
        allCountries: [newCountry, ...allCountries],
        countries: [newCountry, ...countries]
      }
    }
    case SHOW_MODAL: {
      const { bool } = action;
      return { ...state, modalVisible: bool };
    }
    default:
      return state;
  }
};