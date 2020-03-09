import { connect } from 'react-redux'
import QuestionIndicator from '../components/QuestionIndicator'

function mapStateToProps(state, ownProps) {
  const {
    groupSlug,
    questionSlug,
    isFocused
  } = ownProps;

  let requestEvidence = true; // TODO - rethink this edge case.
  let isEvidenceLoading, isEvidenceLoaded, isEvidenceLoadError;

  const {
    number: questionNumber,
    evidence: evidenceSlug,
    isAutofillLoading,
    isAutofillLoaded,
    isAutofillLoadError,
    autofillLoadError,
    autofillId
  } = state.activity.groups.byId[groupSlug].questions.byId[questionSlug];

  if (!evidenceSlug) {
    requestEvidence = false;
  }

  if (requestEvidence) {
    ({
      isLoading: isEvidenceLoading,
      isLoaded: isEvidenceLoaded,
      isLoadError: isEvidenceLoadError
    } = state.activity.evidences[evidenceSlug]);
  }

  return {
    number: questionNumber,
    isEvidenceLoading: isEvidenceLoading,
    isEvidenceLoaded: isEvidenceLoaded,
    isEvidenceLoadError: isEvidenceLoadError,
    isFocused: isFocused,
    isAutofillLoading,
    isAutofillLoaded,
    isAutofillLoadError,
    autofillLoadError,
    autofillId
  };
}

const questionIndicatorContainer = connect(mapStateToProps, {})(QuestionIndicator);

export default questionIndicatorContainer;
