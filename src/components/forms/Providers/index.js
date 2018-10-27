import ProvidersForm from './providersForm';
import { connect } from "react-redux";
import {
  setProvider,
} from '../../../services/providersService/actions';

const mapDispatchToProps = dispatch => {
  return {
    setProvider: provider => dispatch(setProvider(provider)),
  };
}

export default connect(null, mapDispatchToProps)(ProvidersForm);