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

const mapDispatchToProps = {
  getAllPropTypes: () => getAllPropTypes(),
  deletePropType: propType => deletePropType(propType),
  setPropType: propType => setPropType(propType),
}

export default connect(mapStateToProps, mapDispatchToProps)(PropTypesListView);