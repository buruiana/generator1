import { connect } from "react-redux";
import ProvidersListView from './providersListView';
import {
  deleteProvider,
  setProvider,
} from '../../../services/providersService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProvider: provider => dispatch(deleteProvider(provider)),
    setProvider: provider => dispatch(setProvider(provider)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersListView);