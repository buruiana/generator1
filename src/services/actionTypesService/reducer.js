import * as actions from '../actionTypesService/actionTypes';

export const initialState = () => ({
  actionTypes: [],
});

export default (state = initialState(), action) => {
  console.log('console: action', actions);
  switch (action.type) {
    case actions.ACTION_TYPES_SET:
      return {
        ...state,
        actionTypes: action.actionTypes
      };
    default:
      return state;
  }
}