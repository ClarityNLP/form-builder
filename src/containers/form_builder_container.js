import { connect } from 'react-redux'
import FormBuilder from '../components/FormBuilder'

import {
  getFhirClient,
  getDocumentReferences
} from '../actions/fhir';

import {
  getSourceId
} from '../actions/source_id'

function mapStateToProps(state) {
  return {
    source: state.source
  };
}

const formBuilderContainer = connect(mapStateToProps, {
  getFhirClient,
  getDocumentReferences,
  getSourceId
})(FormBuilder);

export default formBuilderContainer;
