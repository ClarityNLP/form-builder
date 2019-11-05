import { connect } from 'react-redux'
import EvidencePanel from '../components/EvidencePanel'

function mapStateToProps(state) {
  return {
    router: state.router,
    focusQuestion: state.form.focusQuestion,
    questions: state.form.questions,
    evidence: state.evidence
  };
}

const evidencePanelContainer = connect(mapStateToProps, {
})(EvidencePanel);

export default evidencePanelContainer;
