import { connect } from 'react-redux';
import EvidenceList from '../components/EvidenceList';

function mapStateToProps(state, ownProps) {
  const { groupSlug, questionSlug } = ownProps.match.params;

  const {
    autofillLoadError,
    isAutofillLoadError
  } = state.activity.groups.byId[groupSlug].questions.byId[questionSlug];

  return {
    evidence: state.activity.evidences[state.activity.groups.byId[groupSlug].questions.byId[questionSlug].evidence],
    groupIsLoaded: state.activity.groups.byId[groupSlug].isLoaded,
    isAutofillLoadError,
    autofillLoadError
  };
}

const evidenceListContainer = connect(mapStateToProps, {
})(EvidenceList);

export default evidenceListContainer;
