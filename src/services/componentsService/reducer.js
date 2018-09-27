import * as actionTypes from '../componentsService/actionTypes';

export const initialState = () => ({
  components: [],
  component: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_COMPONENTS:
      return {
        ...state,
        components: action.components,
      };
    case actionTypes.SET_SELECTED_COMPONENT:
      return {
        ...state,
        component: action.component,
      };
    default:
      return state;
  }
}