import { connect } from 'react-redux'
import FormPanel from '../components/FormPanel'
import { push } from 'connected-react-router'

import {
  getForm,
  resetForm,
  closeCatalog
} from '../actions/catalog';

import {
  getEvidenceByGroup
} from '../actions/evidence';

import {
  focusQuestion
} from '../actions/focus_question';

function mapStateToProps(state, ownProps) {
  return {
    pathname: state.router.location.pathname,
    form: state.form,
    evidenceByGroup: state.evidenceByGroup,
    evidence: state.evidence,
    fhirClient: state.fhir.client,
    sourceId: state.source.id,
    ...ownProps.params,
    ...ownProps.search
  };
}

const formPanelContainer = connect(mapStateToProps, {
  getForm,
  resetForm,
  closeCatalog,
  getEvidenceByGroup,
  focusQuestion,
  push
})(FormPanel);

export default formPanelContainer;
