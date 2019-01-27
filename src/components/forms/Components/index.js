import ComponentsForm from './componentsForm';
import { connect } from "react-redux";
import {
  setComponent,
} from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
    propTypes: state.propTypesServiceReducer.propTypes,
    components: state.componentsServiceReducer.components,
  }
}

const mapDispatchToProps = {
  setComponent: componnet => setComponent(componnet),
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsForm);