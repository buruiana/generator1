import { connect } from 'react-redux';
import ComponentInfo from './componentInfo';

const mapStatetoProps = state => ({
  modalContent: state.modalServiceReducer.modalContent,
  modalVisible: state.modalServiceReducer.modalVisible
});

const mapDispatchtoProps = dispatch => {
  return {

  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ComponentInfo);