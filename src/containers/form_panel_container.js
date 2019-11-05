import { connect } from 'react-redux'
import FormPanel from '../components/FormPanel'
import { push } from 'connected-react-router'

import {
  getEvidenceByGroup
} from '../actions/evidence';

import {
  focusQuestion
} from '../actions/focus_question';

function mapStateToProps(state) {
  return {
    pathname: state.router.location.pathname,
    form: state.form,
    evidenceByGroup: state.evidenceByGroup,
    evidence: state.evidence
  };
}

const formPanelContainer = connect(mapStateToProps, {
  getEvidenceByGroup,
  focusQuestion,
  push
})(FormPanel);

export default formPanelContainer;
