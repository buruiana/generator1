import ComponentPropsForm from './componentPropsForm';
import { connect } from "react-redux";
import { setModalVisibility } from '../../../services/modalService/actions';
import { setComponent, setSelectedComponent } from '../../../services/componentsService/actions';


const mapStateToProps = state => {
  return {
    propTypes: state.propTypesServiceReducer.propTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setModalVisibility: modalVisible => dispatch(setModalVisibility(modalVisible)),
    setComponent: () => dispatch(setComponent()),
    setSelectedComponent: component => dispatch(setSelectedComponent(component)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPropsForm);