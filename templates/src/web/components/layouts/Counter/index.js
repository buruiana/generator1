import Counter from './counter';
import { connect } from 'react-redux';
import { setCounter } from '../../../../shared/services/counterService/actions';

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
});

const mapDispatchToProps = {
  setCounter: counter => setCounter(counter)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);