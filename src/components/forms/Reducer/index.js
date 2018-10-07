import ReducerForm from './reducerForm';
import { connect } from "react-redux";
import {
  setReducer,
} from '../../../services/serviceSettingsService/actions';
import {
  setModalVisibility,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    reducer: state.serviceSettingsServiceReducer.reducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setReducer: reducer => dispatch(setReducer(reducer)),
    setModalVisibility: visibile => dispatch(setModalVisibility(visibile)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReducerForm);