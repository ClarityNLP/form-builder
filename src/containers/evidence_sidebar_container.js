import { connect } from 'react-redux'
import EvidenceSidebar from '../components/EvidenceSidebar'

function mapStateToProps(state) {
  return {
    activityIsLoaded: state.activity.isLoaded
  };
}

const evidenceSidebarContainer = connect(mapStateToProps, {
})(EvidenceSidebar);

export default evidenceSidebarContainer;
