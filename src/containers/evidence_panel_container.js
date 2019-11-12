import { connect } from 'react-redux'
import EvidencePanel from '../components/EvidencePanel'

function mapStateToProps(state) {
  return {
    router: state.router,
    evidence: state.evidence,
    content: state.form.content,
    focusQuestion: state.form.focusQuestion
  };
}

const evidencePanelContainer = connect(mapStateToProps, {
})(EvidencePanel);

export default evidencePanelContainer;
