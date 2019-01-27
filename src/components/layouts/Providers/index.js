import { connect } from "react-redux";
import ProvidersListView from './providersListView';
import {
  deleteProvider,
  setProvider,
} from '../../../services/providersService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
    searchData: state.componentsServiceReducer.searchData,
  }
}

const mapDispatchToProps = {
    deleteProvider: provider => deleteProvider(provider),
    setProvider: provider => setProvider(provider),
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvidersListView);