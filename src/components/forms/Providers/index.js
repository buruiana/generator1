import ProvidersForm from './providersForm';
import { connect } from "react-redux";
import {
  setProvider,
  setSelectedProvider
} from '../../../services/providersService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setProvider: () => dispatch(setProvider()),
    setSelectedProvider: provider => dispatch(setSelectedProvider(provider)),
  };
}

export default connect(null, mapDispatchToProps)(ProvidersForm);