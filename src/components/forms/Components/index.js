import ComponentsForm from './componentsForm';
import { connect } from "react-redux";
import {
  setComponent,
  setSelectedComponent
} from '../../../services/componentsService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setComponent: () => dispatch(setComponent()),
    setSelectedComponent: techno => dispatch(setSelectedComponent(techno)),
  };
}

export default connect(null, mapDispatchToProps)(ComponentsForm);