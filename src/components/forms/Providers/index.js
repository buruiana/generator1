import ProvidersForm from './providersForm';
import { connect } from "react-redux";
import { setProvider } from '../../../services/providersService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
  }
};

const mapDispatchToProps = {
  setProvider: provider => setProvider(provider),
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersForm);