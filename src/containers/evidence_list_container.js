import { connect } from 'react-redux';
import EvidenceList from '../components/EvidenceList';

function mapStateToProps(state, ownProps) {
  const { groupSlug, questionSlug } = ownProps.match.params;

  console.log("A groupSlug: ",groupSlug);
  console.log("A questionSlug: ",questionSlug);

  return {
    evidence: state.form.evidences[state.form.groups.byId[groupSlug].questions.byId[questionSlug].evidence]
  };
}

const evidenceListContainer = connect(mapStateToProps, {
})(EvidenceList);

export default evidenceListContainer;
