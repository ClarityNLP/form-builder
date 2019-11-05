import { connect } from 'react-redux'
import FormBuilder from '../components/FormBuilder'

import {
  getFhirClient,
  getDocumentReferences
} from '../actions/fhir';

function mapStateToProps(state) {
  return {
    patient: state.patient
  };
}

const formBuilderContainer = connect(mapStateToProps, {
  getFhirClient,
  getDocumentReferences
})(FormBuilder);

export default formBuilderContainer;
