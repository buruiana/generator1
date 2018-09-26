import TechnosForm from './technosForm';
import { connect } from "react-redux";
import {
  setTechno,
  setSelectedTechno
} from '../../../services/technosService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setTechno: () => dispatch(setTechno()),
    setSelectedTechno: techno => dispatch(setSelectedTechno(techno)),
  };
}

export default connect(null, mapDispatchToProps)(TechnosForm);