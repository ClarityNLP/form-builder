import { SET_PATIENT_SUCCESS, SET_PATIENT } from './types';

export const setPatient = smart => dispatch => {
  dispatch({
    type: SET_PATIENT
  });

  const { patient } = smart;

  patient.read().then(patientData => {
    smart.patient
      .request('DocumentReference', { pageLimit: 10, flat: true })
      .then(data => {
        dispatch({
          type: SET_PATIENT_SUCCESS,
          data: {
            docs: data,
            data: patientData
          }
        });
      });
  });
};
