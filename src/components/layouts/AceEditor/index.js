import { connect } from "react-redux";
import Ace from './ace';

const mapStateToProps = state => {
  return {
    actionTypez: state.codeGeneratorServiceReducer.actionTypez,
    actions: state.codeGeneratorServiceReducer.actions,
    saga: state.codeGeneratorServiceReducer.saga, 
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     initApp: () => dispatch(initApp()),
//   };
// }

export default connect(mapStateToProps)(Ace);