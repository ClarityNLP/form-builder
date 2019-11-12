import axios from 'axios';

export function getCatalogContent() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      dispatch({
        type: 'GET_CATALOG_CONTENT_REQUESTED'
      });

      axios.get(`${window._env_.FORM_CMS_URL}/forms`)
      .then(res => {
        dispatch({
          type: 'GET_CATALOG_CONTENT_FULFILLED',
          data: res.data
        });
        resolve('Finished retrieving catalog content.');
      })
      .catch(error => {
        dispatch({
          type: 'GET_CATALOG_CONTENT_REJECTED',
          error: error.message
        })
        reject(error.message);
      })
    })
  }
}

export function getForm(slug) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      dispatch({
        type: 'GET_FORM_REQUESTED'
      });

      axios.get(`${window._env_.FORM_CMS_URL}/forms/${slug}`)
      .then(res => {
        dispatch({
          type: 'GET_FORM_FULFILLED',
          data: res.data
        });
        resolve(`Finished retrieving form ${slug}`);
      })
      .catch(error => {
        dispatch({
          type: 'GET_FORM_REJECTED',
          error: error.message
        })
        reject(error.message);
      })
    })
  }
}

export function resetForm() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'RESET_FORM'
      });

      resolve();
    });
  }
}

export function openCatalog() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'OPEN_CATALOG'
      });

      resolve();
    });
  }
}

export function closeCatalog() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'CLOSE_CATALOG'
      });

      resolve();
    });
  }
}
