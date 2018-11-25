import * as actionTypes from '../componentSettingsService/actionTypes';

export const initialState = () => ({
  hoc: {
    connectRedux: false,
    mapStateToProps: false,
    mapDispatchToProps: false,
  },
  smart: {
    hasConstructor: false,
    hasState: false,
    lifeCycleMethods: {},
  },
  dumb: {},
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_HOC:
      return {
        ...state,
        hoc: action.hoc
      };
    case actionTypes.SET_SMART_SETTINGS:
      return {
        ...state,
        smart: action.smart,
      };
    default:
      return state;
  }
}