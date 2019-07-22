import { SET_FORM, SET_FORM_SUCCESS } from './types';
import CIBMTR_Form from '../../tmp_form';

export const setForm = () => dispatch => {
  dispatch({
    type: SET_FORM
  });

  dispatch({
    type: SET_FORM_SUCCESS,
    data: CIBMTR_Form
  });
};
