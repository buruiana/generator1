import * as actionTypes from '../modalService/actionTypes';

export const initialState = () => ({
  modalVisible: true,
  modalContent: {
    props: [],
    type: ''
  },
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.MODAL_VISIBILITY_SET:
      return {
        ...state,
        modalVisible: action.payload
      };
    case actionTypes.MODAL_CONTENT_SET:
      return {
        ...state,
        modalContent: action.payload
      };
    default:
      return state;
  }
}