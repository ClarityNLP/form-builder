import { connect } from 'react-redux'
import NavbarTop from '../components/NavbarTop'

import {
  openCatalog
} from '../actions/catalog';

function mapStateToProps(state) {
  return {
    router: state.router,
    form: state.form,
    forms: state.catalog.forms.slice(0,3)
  };
}

const navbarTopContainer = connect(mapStateToProps, {
  openCatalog
})(NavbarTop);

export default navbarTopContainer;
