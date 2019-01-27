import ReducerForm from './reducerForm';
import { connect } from "react-redux";
import { setReducer } from '../../../services/serviceSettingsService/actions';

const mapStateToProps = state => {
  return {
    reducer: state.serviceSettingsServiceReducer.reducer,
  }
}

const mapDispatchToProps = {
  setReducer: reducer => setReducer(reducer),
}

export default connect(mapStateToProps, mapDispatchToProps)(ReducerForm);