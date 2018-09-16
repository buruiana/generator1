import * as actionTypes from '../componentsService/actionTypes';

export const initialState = () => ({
  components: [],
  tree: [],
  defaultTree: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_COMPONENTS:
      return {
        ...state,
        components: action.components,
      };
    default:
      return state;
  }
}