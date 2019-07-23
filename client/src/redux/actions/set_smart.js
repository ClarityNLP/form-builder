import { SET_SMART_SUCCESS } from '../actions/types';

export const setSmart = () => dispatch => {
  return new Promise((resolve, reject) => {
    //DEVELOPMENT CODE
    // const tmp_smart = window.FHIR.client({
    //   serviceUrl: process.env.REACT_APP_DEFAULT_FHIR_URL,
    //   patientId: '23907'
    // });

    // dispatch({
    //   type: SET_SMART_SUCCESS,
    //   data: tmp_smart
    // });

    // resolve(tmp_smart);

    // PRODUCTION CODE
    window.FHIR.oauth2.ready(smart => {
      dispatch({
        type: SET_SMART_SUCCESS,
        data: smart
      });

      resolve(smart);
    });
  });
};
