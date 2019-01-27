import PropTypesForm from './propTypesForm';
import { connect } from "react-redux";
import { setPropType } from '../../../services/propTypesService/actions';

const mapStateToProps = state => {
  return {
    propTypes: state.propTypesServiceReducer.propTypes,
  }
};

const mapDispatchToProps = {
  setPropType: propType => setPropType(propType),
}

export default connect(mapStateToProps, mapDispatchToProps)(PropTypesForm);