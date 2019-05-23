export const REQ_COUNTRIES = 'REQ_COUNTRIES';
export const RES_COUNTRIES = 'RES_COUNTRIES';

export const reqCountries = () => ({ type: REQ_COUNTRIES });
export const resCountries = countries => ({ type: RES_COUNTRIES, countries });

const INITIAL_STATE = {
  countries: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RES_COUNTRIES:
      const { countries } = action
      return { ...state, countries };
    default:
      return state;
  }
};