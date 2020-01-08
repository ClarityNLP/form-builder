import { connect } from 'react-redux'
import SmartChart from '../components/SmartChart'

import {
  getFhirClient,
  getFhirRelease,
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

const smartChartContainer = connect(mapStateToProps, {
  getFhirClient,
  getFhirRelease,
  getDocumentReferences,
  getSourceId
})(SmartChart);

export default smartChartContainer;
