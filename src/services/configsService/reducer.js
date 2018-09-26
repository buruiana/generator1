import * as actionTypes from '../modalService/actionTypes';

export const initialState = () => ({
  configs: {
    isOffline: false,
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.CONFIGS_SET:
      return {
        ...state,
        configs: action.payload
      };
    default:
      return state;
  }
}