import { SET_SMART_SUCCESS } from '../actions/types';
import FHIR from 'fhirclient';

export const setSmart = () => dispatch => {
  return new Promise((resolve, reject) => {
    FHIR.oauth2
      .ready()
      .then(smart => {
        dispatch({
          type: SET_SMART_SUCCESS,
          data: smart
        });

        resolve(smart);
      })
      .catch(err => {
        console.log('Error:', err);
      });
  });
};
