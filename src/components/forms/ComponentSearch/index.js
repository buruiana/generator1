import ComponentSearchForm from './componentSearchForm';
import { connect } from "react-redux";
import { setComponent, setFilterData } from '../../../services/componentsService/actions';
import {
  setCurrentModal,
  setAllModals,
} from '../../../services/modalService/actions';

const mapStateToProps = state => {
  return {
    providers: state.providersServiceReducer.providers,
    projectTechno: state.projectSettingsServiceReducer.projectTechno,
    projectDestination: state.projectSettingsServiceReducer.projectDestination,
    exported: state.projectSettingsServiceReducer.exported,
    allModals: state.modalServiceReducer.allModals,
  }
}

const mapDispatchToProps = {
  setComponent: componnet => setComponent(componnet),
  setFilterData: filterData => setFilterData(filterData),
  setCurrentModal: type => setCurrentModal(type),
  setAllModals: allModals => setAllModals(allModals),
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentSearchForm);