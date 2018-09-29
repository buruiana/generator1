import * as actionTypes from '../configsService/actionTypes';

export const initialState = () => ({
  configs: {
    isOffline: true,
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_CONFIGS_IS_OFFLINE:
      return {
        ...state,
        isOffline: action.action
      };
    default:
      return state;
  }
}