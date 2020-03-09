import { connect } from 'react-redux'
import Catalog from '../components/Catalog'

import {
  getCatalogContent
} from '../actions/catalog';

function mapStateToProps(state, ownProps) {
  return {
    activity: state.activity,
    catalog: state.catalog
  };
}

const catalogContainer = connect(mapStateToProps, {
  getCatalogContent
})(Catalog);

export default catalogContainer;
