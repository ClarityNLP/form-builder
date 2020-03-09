import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { activityReducer } from './activity_reducer'
import { evidenceByGroupReducer } from './evidence_by_group_reducer'
import { patientReducer } from './patient_reducer'
import { fhirReducer } from './fhir_reducer'
import { catalogReducer } from './catalog_reducer'
import { sourceReducer } from './source_reducer'
import { groupLookupReducer } from './group_lookup_reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  activity: activityReducer,
  evidenceByGroup: evidenceByGroupReducer,
  patient: patientReducer,
  fhir: fhirReducer,
  catalog: catalogReducer,
  source: sourceReducer,
  groupLookup: groupLookupReducer
})
