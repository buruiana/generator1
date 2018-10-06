import { connect } from "react-redux";
import Ace from './ace';

const mapStateToProps = state => {
  return {
    actionTypez: state.codeGeneratorServiceReducer.actionTypez,
    actions: state.codeGeneratorServiceReducer.actions,
    saga: state.codeGeneratorServiceReducer.saga,
    reducer: state.codeGeneratorServiceReducer.reducer,
    hoc: state.codeGeneratorServiceReducer.hoc,
    projectSettings: state.projectSettingsServiceReducer,
    aceTab: state.aceTabsServiceReducer.aceTab,
    component: state.componentsServiceReducer.component,
  }
}

export default connect(mapStateToProps)(Ace);