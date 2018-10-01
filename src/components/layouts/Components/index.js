import { connect } from "react-redux";
import ComponentsListView from './componentsListView';
import {
  deleteComponent,
  setSelectedComponent,
} from '../../../services/componentsService/actions';
import {
  getAllProviders,
} from '../../../services/providersService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteComponent: () => dispatch(deleteComponent()),
    setSelectedComponent: component => dispatch(setSelectedComponent(component)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsListView);