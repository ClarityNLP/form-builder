import { connect } from 'react-redux'
import AutofillModal from '../components/AutofillModal'

function mapStateToProps(state, ownProps) {
  const { groupSlug, questionSlug } = ownProps.params;

  return {
    autofill: state.activity.groups.byId[groupSlug].questions.byId[questionSlug].autofill,
    autofillId: state.activity.groups.byId[groupSlug].questions.byId[questionSlug].autofillId
  };
}

const autofillModalContainer = connect(mapStateToProps, {
})(AutofillModal);

export default autofillModalContainer;
