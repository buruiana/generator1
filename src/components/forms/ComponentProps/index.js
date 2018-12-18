import ComponentPropsForm from './componentPropsForm';
import { connect } from "react-redux";
import { setComponent } from '../../../services/componentsService/actions';


const mapStateToProps = state => {
  return {
    propTypes: state.propTypesServiceReducer.propTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setComponent: component => dispatch(setComponent(component)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPropsForm);