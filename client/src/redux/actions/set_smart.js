import { SET_SMART_SUCCESS } from '../actions/types';

export const setSmart = () => dispatch => {
  return new Promise((resolve, reject) => {
    window.FHIR.oauth2.ready(
      smart => {
        dispatch({
          type: SET_SMART_SUCCESS,
          data: smart
        });

        window.smart = smart;
        resolve(smart);
      },
      err => {
        console.log('Error:', err);
      }
    );
  });
};
