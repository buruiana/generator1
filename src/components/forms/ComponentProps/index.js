import ComponentPropsForm from './componentPropsForm';
import { connect } from "react-redux";
import { setModalVisibility } from '../../../services/modalService/actions';
import { setComponent, setSelectedComponent } from '../../../services/componentsService/actions';


// const mapStateToProps = state => {
//   return {
//     componentProps: state.modalServiceReducer.modalContent,
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setComponent: () => dispatch(setComponent()),
    setSelectedComponent: component => dispatch(setSelectedComponent(component)),
  };
}

export default connect(null, mapDispatchToProps)(ComponentPropsForm);