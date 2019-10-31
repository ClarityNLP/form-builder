import { connect } from 'react-redux'
import EvidencePanel from '../components/EvidencePanel'

import evidences from '../tmp_evid.js'

function mapStateToProps(state) {
  return {
    router: state.router,
    form: state.form,
    //evidence...
    // groups:
    evidences: evidences
  };
}

const evidencePanelContainer = connect(mapStateToProps, {
})(EvidencePanel);

export default evidencePanelContainer;
