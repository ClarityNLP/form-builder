export function getFhirClient(SMART) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      dispatch({
        type: 'GET_FHIR_CLIENT_REQUESTED',
        message: 'Getting FHIR client.'
      });

      SMART.ready()
        .then(client => {
          dispatch({
            type: 'GET_FHIR_CLIENT_FULFILLED',
            message: 'Retrieved FHIR client.',
            client: client
          });
          resolve(client);
        })
        .catch(error => {
          dispatch({
            type: 'GET_FHIR_CLIENT_REJECTED',
            message: 'Problem getting FHIR client.'
          });
          reject(error);
        })
    })
  }
}

export function getDocumentReferences(client) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      const { patient } = client;

      dispatch({
        type: 'GET_PATIENT_REQUESTED',
        message: 'Gathering patient data.'
      });

      Promise.all([
        patient.read().then(data => data),
        patient.request('DocumentReference', { pageLimit: 10, flat: true }).then(docRefs => docRefs)
      ])
      .then(values => {
        dispatch({
          type: 'GET_PATIENT_FULFILLED',
          data: {
            patient: values[0],
            docRefs: values[1]
          }
        });
        resolve(values[1]);
      })
      .catch(error => {
        dispatch({
          type: 'GET_PATIENT_REJECTED',
          message: 'Problem loading patient.'
        });
        reject();
      });
    });
  }
}

export function getFhirRelease(client) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      dispatch({
        type: 'GET_FHIR_RELEASE_REQUESTED',
        message: 'Getting FHIR release version.'
      });

      client.getFhirRelease()
        .then(release => {
          dispatch({
            type: 'GET_FHIR_RELEASE_FULFILLED',
            message: 'Successful retrieved FHIR release version.',
            data: release
          });
          resolve(client);
        })
        .catch(error => {
          dispatch({
            type: 'GET_FHIR_RELEASE_REJECTED',
            message: 'Problem getting FHIR release version.'
          });
          reject(error);
        })
    });
  }
}
