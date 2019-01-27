import ComponentSearchForm from './componentSearchForm';
import { connect } from "react-redux";
import { setComponent } from '../../../services/componentsService/actions';
import { setFilterData } from '../../../services/componentsService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
  }
}

const mapDispatchToProps = {
  setComponent: componnet => setComponent(componnet),
  setFilterData: filterData => setFilterData(filterData),
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentSearchForm);