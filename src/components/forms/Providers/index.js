import ProvidersForm from './providersForm';
import { connect } from "react-redux";
import {
  setProvider,
} from '../../../services/providersService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setProvider: provider => dispatch(setProvider(provider)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersForm);