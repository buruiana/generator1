import HocForm from './hocForm';
import { connect } from "react-redux";
import {
  setHoc,
} from '../../../services/hocService/actions';
import {
  setModalVisibility,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    hoc: state.hocServiceReducer.hoc,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHoc: hoc => dispatch(setHoc(hoc)),
    setModalVisibility: visibile => dispatch(setModalVisibility(visibile)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HocForm);