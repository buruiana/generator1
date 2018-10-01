import { connect } from "react-redux";
import PropTypesListView from './propTypesListView';
import {
  getAllPropTypes,
  deletePropType,
  setSelectedPropType,
} from '../../../services/propTypesService/actions';

const mapStateToProps = state => {
  return {
    propTypes: state.propTypesServiceReducer.propTypes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllPropTypes: () => dispatch(getAllPropTypes()),
    deletePropType: () => dispatch(deletePropType()),
    setSelectedPropType: propType => dispatch(setSelectedPropType(propType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropTypesListView);