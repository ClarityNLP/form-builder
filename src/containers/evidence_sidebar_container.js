import { connect } from 'react-redux'
import EvidenceSidebar from '../components/EvidenceSidebar'

function mapStateToProps(state) {
  return {
    formIsLoaded: state.form.isLoaded
  };
}

const evidenceSidebarContainer = connect(mapStateToProps, {
})(EvidenceSidebar);

export default evidenceSidebarContainer;
