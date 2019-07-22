import { SET_DATE } from './types';

export const setDate = date => dispatch => {
  dispatch({
    type: SET_DATE,
    data: date
  });
};
