import * as actions from './actions';

export const setActions = actions => {
  return {
    type: actions.ACTIONS_SET,
    actions
  };
}
