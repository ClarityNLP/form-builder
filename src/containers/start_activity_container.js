import { connect } from 'react-redux'
import StartActivity from '../components/StartActivity'
import { replace } from 'connected-react-router'

import {
  resolveActivityId
} from '../actions/activity';

function mapStateToProps(state, ownProps) {
  const { formSlug } = ownProps.match.params;
  return {
    patientId:  state.fhir.client.patient.id,
    formSlug: formSlug
  };
}

const startActivityContainer = connect(mapStateToProps, {
  resolveActivityId,
  replace
})(StartActivity);

export default startActivityContainer;
