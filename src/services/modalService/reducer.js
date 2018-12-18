import * as actionTypes from '../modalService/actionTypes';

export const initialState = () => ({
  currentModal: '',
  allModals: [
    // {
    //   modalName: '',
    //   modalVisible: true,
    //   modalContent: {
    //     props: [],
    //     type: ''
    //   },
    // }
  ],
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case actionTypes.SET_ALL_MODALS:
      return {
        ...state,
        allModals: action.payload
      };
    case actionTypes.SET_CURRENT_MODAL:
      return {
        ...state,
        currentModal: action.payload
      };
    default:
      return state;
  }
}