import { connect } from "react-redux";
import AceTabs from './aceTabs';
import {
  setAceTab,
} from '../../../services/aceTabsService/actions';

const mapStateToProps = state => {
  return {
    aceTabs: state.aceTabsServiceReducer.aceTabs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAceTab: tab => dispatch(setAceTab(tab)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AceTabs);