import { connect } from "react-redux";
import AceTabs from './aceTabs';
import { setAceTab } from '../../../services/aceTabsService/actions';

const mapStateToProps = state => {
  return {
    aceTabs: state.aceTabsServiceReducer.aceTabs,
    aceTab: state.aceTabsServiceReducer.aceTab,
  }
}

const mapDispatchToProps = {
  setAceTab: tab => setAceTab(tab),
}

export default connect(mapStateToProps, mapDispatchToProps)(AceTabs);