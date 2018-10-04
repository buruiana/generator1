import * as actionTypes from '../aceTabsService/actionTypes';

export const initialState = () => ({
  aceTab: 'index',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ACE_TAB:
      return {
        ...state,
        aceTab: action.aceTab
      };
    default:
      return state;
  }
}