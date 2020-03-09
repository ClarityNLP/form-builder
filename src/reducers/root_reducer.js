import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { formReducer } from './form_reducer'
import { evidenceByGroupReducer } from './evidence_by_group_reducer'
import { evidenceReducer } from './evidence_reducer'
import { patientReducer } from './patient_reducer'
import { fhirReducer } from './fhir_reducer'
import { catalogReducer } from './catalog_reducer'
import { sourceReducer } from './source_reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  evidenceByGroup: evidenceByGroupReducer,
  evidence: evidenceReducer,
  patient: patientReducer,
  fhir: fhirReducer,
  catalog: catalogReducer,
  source: sourceReducer
})
