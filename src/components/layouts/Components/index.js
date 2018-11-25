import { connect } from "react-redux";
import ComponentsListView from './componentsListView';
import {
  deleteComponent,
} from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    components: state.componentsServiceReducer.components,
    searchData: state.componentsServiceReducer.searchData,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComponent: component => dispatch(deleteComponent(component)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsListView);