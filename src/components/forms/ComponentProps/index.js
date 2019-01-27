import ComponentPropsForm from './componentPropsForm';
import { connect } from "react-redux";
import { setComponent } from '../../../services/componentsService/actions';


const mapStateToProps = state => {
  return {
    propTypes: state.propTypesServiceReducer.propTypes,
  }
}

const mapDispatchToProps = {
  setComponent: component => setComponent(component),
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPropsForm);