export const REQ_COUNTRIES = 'REQ_COUNTRIES';
export const RES_COUNTRIES = 'RES_COUNTRIES';

export const reqCountries = () => ({ type: REQ_COUNTRIES });
export const resCountries = () => ({ type: RES_COUNTRIES });

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQ_COUNTRIES:
      return state;
    default:
      return state;
  }
};