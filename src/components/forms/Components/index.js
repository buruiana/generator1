import ComponentsForm from './componentsForm';
import { connect } from "react-redux";
import {
  setComponent,
  setSelectedComponent
} from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setComponent: () => dispatch(setComponent()),
    setSelectedComponent: componnet => dispatch(setSelectedComponent(componnet)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsForm);