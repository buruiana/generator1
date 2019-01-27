import HocForm from './hocForm';
import { connect } from "react-redux";
import { setHoc } from '../../../services/componentSettingsService/actions';

const mapStateToProps = state => {
  return {
    hoc: state.componentSettingsServiceReducer.hoc,
  }
}

const mapDispatchToProps = {
  setHoc: hoc => setHoc(hoc),
}

export default connect(mapStateToProps, mapDispatchToProps)(HocForm);