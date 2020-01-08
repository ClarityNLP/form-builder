import { connect } from 'react-redux'
import FormPanel from '../components/FormPanel'
import { push } from 'connected-react-router'
import idx from 'idx';

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

  const { formSlug, groupSlug } = ownProps.params;
  const { pos } = ownProps.search;

  console.log('GROUP SLUG: ',groupSlug);

  return {
    pathname: state.router.location.pathname,
    isLoading: state.form.isLoading,
    formSlug: formSlug,
    groupSlug: groupSlug,
    pos: pos,
    questions: idx(state.form, _ => _.groups.byId[groupSlug].questions),
    evidences: idx(state.form, _ => _.evidences), //TODO take subset of evidences (for the particular group)
    groups: idx(state.form, _ => _.groups.allIds),
    // form: state.form,
    // evidenceByGroup: state.evidenceByGroup,
    // evidence: state.evidence,
    // fhirClient: state.fhir.client,
    // sourceId: state.source.id,
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
