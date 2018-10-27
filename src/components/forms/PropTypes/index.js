import PropTypesForm from './propTypesForm';
import { connect } from "react-redux";
import {
  setPropType,
} from '../../../services/propTypesService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setPropType: propType => dispatch(setPropType(propType)),
  };
}

export default connect(null, mapDispatchToProps)(PropTypesForm);