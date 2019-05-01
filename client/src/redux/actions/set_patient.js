import { SET_PATIENT_SUCCESS, SET_PATIENT } from './types';

export const setPatient = smart => dispatch => {
  dispatch({
    type: SET_PATIENT
  });

  const { patient } = smart;
  let patientText = patient.read();

  let tmp = {};

  patientText.done(data => {
    let first_name = '';
    let last_name = '';
    let full_name = '';

    if (typeof data.name[0] !== 'undefined') {
      let given = data.name[0]['given'];
      let family = data.name[0]['family'];

      if (typeof given === 'string') {
        first_name = given;
      } else {
        first_name = given.join(' ');
      }

      if (typeof family === 'string') {
        last_name = family;
      } else {
        last_name = family.join(' ');
      }
    }

    full_name = last_name + ', ' + first_name;

    tmp = {
      ...tmp,
      id: data.id,
      name: full_name
    };

    let docs = smart.patient.api.fetchAll({
      type: 'DocumentReference'
    });

    docs.done(data => {
      tmp = {
        ...tmp,
        documents: data
      };
      dispatch({
        type: SET_PATIENT_SUCCESS,
        data: tmp
      });
    });
  });
};
