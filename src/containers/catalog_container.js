import { connect } from 'react-redux'
import Catalog from '../components/Catalog'
import { push } from 'connected-react-router'

import {
  getCatalogContent,
  getForm,
  closeCatalog
} from '../actions/catalog';

function mapStateToProps(state) {
  return {
    router: state.router,
    form: state.form,
    catalog: state.catalog
  };
}

const catalogContainer = connect(mapStateToProps, {
  getCatalogContent,
  getForm,
  closeCatalog,
  push
})(Catalog);

export default catalogContainer;
