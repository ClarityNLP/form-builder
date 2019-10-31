import { connect } from 'react-redux'
import FormPanel from '../components/FormPanel'

import {
  getEvidenceByGroup
} from '../actions/evidence'

function mapStateToProps(state) {
  return {
    pathname: state.router.location.pathname,
    form: state.form,
    evidenceByGroup: state.evidenceByGroup
  };
}

const formPanelContainer = connect(mapStateToProps, {
  getEvidenceByGroup
})(FormPanel);

export default formPanelContainer;
