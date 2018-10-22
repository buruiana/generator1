import * as actionTypes from '../componentsService/actionTypes';

export const initialState = () => ({
  components: [],
  component: [],
  searchData: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_COMPONENTS:
      return {
        ...state,
        components: action.components,
      };
    case actionTypes.SET_COMPONENT:
      return {
        ...state,
        component: action.component,
      };
    case actionTypes.FILTER_COMPONENTS:
      return {
        ...state,
        searchData: action.searchData,
      };
    default:
      return state;
  }
}