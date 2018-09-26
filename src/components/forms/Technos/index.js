import TechnosForm from './technosForm';
import { connect } from "react-redux";
import { setTechno } from '../../../services/technosService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setTechno: techno => dispatch(setTechno(techno)),
  };
}

export default connect(null, mapDispatchToProps)(TechnosForm);