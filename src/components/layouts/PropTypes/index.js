import { connect } from "react-redux";
import PropTypesListView from './propTypesListView';
import {
  deletePropType,
  setPropType,
} from '../../../services/propTypesService/actions';

const mapStateToProps = state => {
  return {
    propTypes: state.propTypesServiceReducer.propTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPropTypes: () => dispatch(getAllPropTypes()),
    deletePropType: propType => dispatch(deletePropType(propType)),
    setPropType: propType => dispatch(setPropType(propType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropTypesListView);