import PropTypesForm from './propTypesForm';
import { connect } from "react-redux";
import {
  setPropType,
  setSelectedPropType
} from '../../../services/propTypesService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setPropType: () => dispatch(setPropType()),
    setSelectedPropType: propType => dispatch(setSelectedPropType(propType)),
  };
}

export default connect(null, mapDispatchToProps)(PropTypesForm);