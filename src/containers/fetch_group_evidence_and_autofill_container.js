import { connect } from 'react-redux'
import FetchGroupEvidenceAndAutofill from '../components/FetchGroupEvidenceAndAutofill'

import {
  fetchGroupEvidenceAndAutofill
} from '../actions/evidence';

function mapStateToProps(state, ownProps) {
  return {
    groupSlug: ownProps.match.params.groupSlug
  };
}

const fetchGroupEvidenceAndAutofillContainer = connect(mapStateToProps, {
  fetchGroupEvidenceAndAutofill
})(FetchGroupEvidenceAndAutofill);

export default fetchGroupEvidenceAndAutofillContainer;
