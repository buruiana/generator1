const defaultState = {
  prop: { id: null, name: '', description: '', type: '', technology: '', provider: '' }
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'PROP_SELECT':
      return {
        ...state,
        prop: action.value
      };

    default:
      return state;
  }
}
