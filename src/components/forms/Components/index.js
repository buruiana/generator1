import ComponentsForm from './componentsForm';
import { connect } from "react-redux";
import {
  setComponent,
} from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setComponent: componnet => dispatch(setComponent(componnet)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsForm);