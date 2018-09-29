import * as actions from '../actionsService/actions';

export const initialState = () => ({
  actions: [],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actions.ACTIONS_SET:
      return {
        ...state,
        actions: action.actions
      };
    default:
      return state;
  }
}