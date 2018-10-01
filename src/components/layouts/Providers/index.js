import { connect } from "react-redux";
import ProvidersListView from './providersListView';
import {
  getAllProviders,
  deleteProvider,
  setSelectedProvider,
} from '../../../services/providersService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllProviders: () => dispatch(getAllProviders()),
    deleteProvider: () => dispatch(deleteProvider()),
    setSelectedProvider: provider => dispatch(setSelectedProvider(provider)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersListView);